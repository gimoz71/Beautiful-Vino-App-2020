import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Evento, BVCommonService, RichiesteService } from 'bvino-lib';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Boolean } from 'aws-sdk/clients/apigateway';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public listaEventi: Array<Evento>;

  public showPage = false;

  public nomeAzienda: string;

  constructor(
    private commonService: BVCommonService,
    private richiesteService: RichiesteService,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone,
    public appSessionService: AppSessionService,
    public loaderService: LoaderService
  ) {
    super(router, alertService);
    this.listaEventi = new Array<Evento>();

  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'eventi');
    if (this.appSessionService.isInSession(environment.KEY_AZIENDA_NOME)) {
      this.nomeAzienda = this.appSessionService.get(environment.KEY_AZIENDA_NOME);
    } else {
      this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_NOME).then((val: string) => {
        if (val !== undefined && val !== null && val !== '') {
          const decodedVal = this.decodeObjectInStorage(val);
          this.nomeAzienda = decodedVal;
          this.appSessionService.set(environment.KEY_AZIENDA_NOME, decodedVal);
        } else {
          this.appSessionService.clearForLogout();
        }
      });
    }
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
          this.appSessionService.set(environment.KEY_AZIENDA_ID, decodedVal);
          this.ottieniDati(decodedVal);
        } else {
          this.appSessionService.clearForLogout();
        }
      });
    }
  }

  private ottieniDati(idAzienda: string) {
    this.commonService.get(this.richiesteService.getRichiestaGetEventiAzienda(idAzienda))
      .subscribe(r => {
        // this.eventiService.getEventi(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
        if (r.esito.codice === environment.ESITO_OK_CODICE) {
          this.listaEventi = this.normalizeList(r.eventi);
          this.showPage = true;
        } else {
          this.manageHttpError(r);
        }
      }, err => {
        this.alertService.presentErrorAlert('errore recupero elenco aziende: ' + err.statusText);
      });
  }

  private normalizeList(lista: Array<Evento>): Array<Evento> {
    const toReturn = new Array<Evento>();

    for (const evento of lista) {
      evento.titoloEvento = (evento.titoloEvento ? evento.titoloEvento : '');
      evento.cittaEvento = (evento.cittaEvento ? evento.cittaEvento : '');

      toReturn.push(evento);
    }

    return toReturn;
  }

  ngOnInit() {
  }

  public dettaglioEvento(evento: Evento) {
    this.loaderService.presentLoader('caricamento...');
    this.goToPageParams('dettaglio-evento', { queryParams: { eventoselezionato: JSON.stringify(evento), reload: 'false' } });
  }

  public dettaglioAzienda() {
    this.goToPage('dettaglio-azienda');
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public refresh(event) {

    if (this.appSessionService.isInSession(environment.KEY_AZIENDA_ID)) {
      // L'ID è NELLA SESSIONE, NON è NECESSARIO RECUPERARLO DALLO STORAGE
      this.commonService.get(this.richiesteService.getRichiestaGetEventiAzienda(this.appSessionService.get(environment.KEY_AZIENDA_ID)))
        .subscribe(r => {
          // this.eventiService.getEventi(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
          if (r.esito.codice === environment.ESITO_OK_CODICE) {
            this.listaEventi = this.normalizeList(r.eventi);
            this.showPage = true;
            event.target.complete();
          } else {
            event.target.complete();
            this.manageHttpError(r);
          }
        }, err => {
            this.alertService.presentErrorAlert('errore recupero elenco eventi, contattare l\'amministratore');
            event.target.complete();
        });
    } else {
      // L'ID NON è IN SESSIONE SI VA NELLO STORAGE A RECUPERARLO
      this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_ID).then((val: string) => {
        if (val !== undefined && val !== null && val !== '') {
          const decodedVal = this.decodeObjectInStorage(val);
          console.log('recuperato id azienda da storage: ' + decodedVal);
          this.appSessionService.set(environment.KEY_AZIENDA_ID, decodedVal);
          this.commonService.get(this.richiesteService.getRichiestaGetEventiAzienda(decodedVal))
            .subscribe(r => {
              // this.eventiService.getEventi(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
              if (r.esito.codice === environment.ESITO_OK_CODICE) {
                this.listaEventi = this.normalizeList(r.eventi);
                this.showPage = true;
                event.target.complete();
              } else {
                event.target.complete();
                this.manageHttpError(r);
              }
            }, err => {
              this.alertService.presentErrorAlert('errore recupero elenco eventi, contattare l\'amministratore');
              event.target.complete();
            });
        } else {
          event.target.complete();
          this.alertService.presentErrorAlert('id azienda non presente in sessione, necessario nuovo login');
          this.appSessionService.clearForLogout();
        }
      });
    }
  }
}
