import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Evento, Azienda, Vino, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environmentkeys';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
    selector: 'app-dettaglio-evento',
    templateUrl: './dettaglio-evento.page.html',
    styleUrls: ['./dettaglio-evento.page.scss'],
})
export class DettaglioEventoPage extends BaseComponent implements OnInit {

    private unsubscribe$ = new Subject<void>();

    scrollTop = 150;
    showNav = false;

    public evento: Evento;
    public reload = false;

    public idUtente: string;

    constructor(
        private route: ActivatedRoute,
        public alertService: AlertService,
        public router: Router,
        private logoutComm: LogoutCommunicationService,
        public ngZone: NgZone,
        public commonService: BVCommonService,
        public richiesteService: RichiesteService,
        public appSessionService: AppSessionService
    ) {
        super(router, alertService);
        this.evento = new Evento();
        this.evento.aziendaOspitanteEvento = new Azienda();
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
            // devo ricaricare l'evento
            this.reloadEvento();
        });
    }

    public reloadEvento() {
        this.commonService.get(this.richiesteService.getRichiestaGetEventoUtente(
            this.evento.idEvento,
            this.evento.dataEvento,
            this.idUtente))
            .subscribe(r => {
                if (r.esito.codice === environment.ESITO_OK_CODICE) {
                    this.evento = r.evento;
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
        console.log('vado al dettaglio vino: ' + vino.nomeVino);
    }


    public togliDaiPreferiti() {
        this.commonService.connect(this.richiesteService.getRichiestaRimuoviEventoDaPreferiti(
            this.idUtente,
            this.evento.idEvento,
            this.evento.dataEvento,
            0,
            0
        ))
            .subscribe(r => {
                if (r.esito.codice === environment.ESITO_OK_CODICE) {
                    // ricarico l'utente
                    this.reloadEvento();
                } else {
                    this.alertService.presentErrorAlert(r.esito.message);
                }
            }, err => {
                this.alertService.presentErrorAlert('errore recupero elenco aziende: ' + err.statusText);
            });
    }

    public aggiungiAiPreferiti() {
        const preferitoEvento = (this.evento.statoPreferitoEvento === 'P' ? 1 : 0);
        this.commonService.connect(this.richiesteService.getRichiestaAggiungiEventoAPreferiti(
            this.idUtente,
            this.evento.idEvento,
            this.evento.dataEvento,
            1,
            0))
            .subscribe(r => {
                if (r.esito.codice === environment.ESITO_OK_CODICE) {
                    // ricarico l'utente
                    this.reloadEvento();
                } else {
                    this.alertService.presentErrorAlert(r.esito.message);
                }
            }, err => {
                this.alertService.presentErrorAlert('errore recupero elenco aziende: ' + err.statusText);
            });
    }

    public acquistaEvento() {
        this.alertService.presentAlert('FUNZIONE NON IMPLEMENTATA');
    }

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        // this.scrollTop = event.target.scrollTop; <-- commentato perchè refresha il valore di scrolltop
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
