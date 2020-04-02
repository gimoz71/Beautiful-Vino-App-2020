import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Evento, BVCommonService, RichiesteService } from 'bvino-lib';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Utente } from 'bvino-lib/fesm2015/bvino-lib';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public listaEventi: Array<Evento>;
  public utente: Utente;


  constructor(
    public alertService: AlertService,
    public router: Router,
    public ngZone: NgZone,
    public logoutComm: LogoutCommunicationService,
    public appSessionService: AppSessionService
  ) {
    super(router, alertService);
    this.listaEventi = new Array<Evento>();
    this.utente = new Utente();
  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'profilo');
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
          this.appSessionService.clearForLogout();
        }
      });
    }

    const utenteString = this.appSessionService.get(environment.KEY_UTENTE);
    if (utenteString === undefined || utenteString === '') {
      // necessario login
      this.appSessionService.clearForLogout();
    } else {
      this.utente = JSON.parse(utenteString) as Utente;
    }
  }

  private ottieniDati(idAzienda: string) {

  }

  ngOnInit() {
  }

  public editProfilo() {
    this.goToPageParams('edit-profilo', { queryParams: { utente: JSON.stringify(this.utente), reload: 'false' } });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
