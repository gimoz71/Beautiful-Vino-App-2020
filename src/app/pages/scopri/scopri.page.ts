import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Evento, Feed, BVCommonService, RichiesteService } from 'bvino-lib';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
  selector: 'app-scopri',
  templateUrl: './scopri.page.html',
  styleUrls: ['./scopri.page.scss'],
})
export class ScopriPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public listaFeed: Array<Feed>;

  constructor(
    private commonService: BVCommonService,
    private richiesteService: RichiesteService,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone,
    public appSessionService: AppSessionService
  ) {
    super(router, alertService);
    this.listaFeed = new Array<Feed>();

  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'scopri');

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
  }

  private ottieniDati(idAzienda: string) {
    this.commonService.get(this.richiesteService.getRichiestaGetFeedAzienda(idAzienda))
      .subscribe(r => {
        // this.eventiService.getEventi(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
        if (r.esito.codice === environment.ESITO_OK_CODICE) {
          this.listaFeed = r.feed;
        } else {
          this.manageError(r);
        }
      }, err => {
        this.alertService.presentErrorAlert(err.statusText);
      });
  }

  ngOnInit() {
  }

  public dettaglioFeed(feed: Feed) {
    this.goToPageParams('dettaglio-feed', { queryParams: { feedselezionato: JSON.stringify(feed), reload: 'false' } });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
