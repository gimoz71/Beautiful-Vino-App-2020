import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Evento, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { environment } from 'src/environments/environmentkeys';
import { Subject } from 'rxjs';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
  selector: 'app-acquistaevento',
  templateUrl: './acquistaevento.page.html',
  styleUrls: ['./acquistaevento.page.scss'],
})
export class AcquistaeventoPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  public evento: Evento;
  public idUtente: string;

  public dataAcquistoSelezionata: number;
  public isDataAcquistoSelezionata = false;

  constructor(
    private route: ActivatedRoute,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    public appSessionService: AppSessionService) {
    super(router, alertService);
    this.evento = new Evento();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'dettaglio-azienda');

    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['home'])).then();
    });

    if (this.appSessionService.isInSession(environment.KEY_USER_ID)) {
      this.idUtente = this.appSessionService.get(environment.KEY_USER_ID);
      this.ottieniDati();
    } else {
      this.appSessionService.loadDataFromStorage(environment.KEY_USER_ID).then((val) => {
        if (val !== undefined && val !== null && val !== '') {
          const decodedVal = this.decodeObjectInStorage(val);
          this.idUtente = decodedVal;
          this.ottieniDati();
        } else {
          this.appSessionService.clearForLogout();
        }
      }, (err) => {
        this.manageError(err);
        this.appSessionService.clearForLogout();
      });
    }
  }

  private ottieniDati() {
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(params => {
      this.evento = JSON.parse(params.eventoselezionato) as Evento;

      const newFirstElement = 0;
      this.evento.dateRicorrenti = [newFirstElement].concat(this.evento.dateRicorrenti);
      this.idUtente = params.idutente;
    });
  }

  private tornaADettaglioEvento() {
    this.goToPageParams('dettaglio-evento', { queryParams: { eventoselezionato: JSON.stringify(this.evento), reload: 'true' } });
  }

  public acquistaEvento() {
    this.commonService.connect(this.richiesteService.getRichiestaAcquistaEvento(
      this.idUtente,
      this.evento.idEvento,
      this.evento.dataEvento,
      this.dataAcquistoSelezionata,
      1,
      1))
      .subscribe(r => {
        if (r.esito.codice === environment.ESITO_OK_CODICE) {
          // torno all'evento
          this.alertService.presentAlert('Acquisto concluso con successo');
          this.tornaADettaglioEvento();
        } else {
          this.alertService.presentErrorAlert(r.esito.message);
        }
      }, err => {
        this.alertService.presentErrorAlert('errore recupero elenco aziende: ' + err.statusText);
      });
  }

  public getPostiDisponibiliDataEvento(data: number): number {
    let tot = 0;
    if (this.evento.dettagliIscrittiEvento) {
      if (this.evento.dettagliIscrittiEvento.length >= 0) {
        for (const iscrittoEvento of this.evento.dettagliIscrittiEvento) {
          if (iscrittoEvento.dataEvento === data) {
            {
              tot++;
            }
          }
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
    return this.evento.numMaxPartecipantiEvento - tot;
  }

  public selezionaDataRicorrente(event: any) {
    console.log('dataRicorrenteSelezionata: ' + event.value);
    if (event.value === 0 || event.value === '0') {
      this.isDataAcquistoSelezionata = false;
    } else {
      this.isDataAcquistoSelezionata = true;
      this.dataAcquistoSelezionata = event.value;
    }

  }

}
