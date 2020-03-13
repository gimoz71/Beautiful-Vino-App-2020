import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Vino, BVCommonService, RichiesteService } from 'bvino-lib';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
  selector: 'app-vini',
  templateUrl: './vini.page.html',
  styleUrls: ['./vini.page.scss'],
})
export class ViniPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public listaVini: Array<Vino>;

  constructor(
    private commonService: BVCommonService,
    private richiesteService: RichiesteService,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone,
    private appSessionService: AppSessionService
  ) {
    super(router, alertService);
    this.listaVini = new Array<Vino>();

  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'vini');
    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['home'])).then();
    });

    if (this.appSessionService.isInSession(environment.KEY_AZIENDA_ID)) {
      this.ottieniDati(this.appSessionService.get(environment.KEY_AZIENDA_ID));
    } else {
      this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_ID).then((val: string) => {
        if (val !== undefined && val !== null && val !== '') {
          const decodedVal = this.decodeObjectInStorage(val);
          console.log('recuperato id azienda da storage: ' + decodedVal);
          this.ottieniDati(decodedVal);
        } else {
          this.goToPage('login');
        }
      });
    }
  }

  private ottieniDati(idAzienda: string) {
    this.commonService.get(this.richiesteService.getRichiestaGetViniAzienda(this.appSessionService.get(environment.KEY_AZIENDA_ID)))
      .subscribe(r => {
        if (r.esito.codice === environment.ESITO_OK_CODICE) {
          this.listaVini = r.vini;
        } else {
          this.manageError(r);
        }
      }, err => {
        this.alertService.presentErrorAlert(err.statusText);
      });
  }

  ngOnInit() {
  }

  public dettaglioVino(vino: Vino) {
    this.goToPageParams('dettaglio-vino', { queryParams: { vinoselezionato: JSON.stringify(vino), reload: 'false' } });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
