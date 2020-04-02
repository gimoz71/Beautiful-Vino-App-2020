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
import { LoaderService } from 'src/app/services/loader/loader.service';

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

    public showPage = false;

    constructor(
        private route: ActivatedRoute,
        public alertService: AlertService,
        public router: Router,
        private logoutComm: LogoutCommunicationService,
        public ngZone: NgZone,
        public commonService: BVCommonService,
        public richiesteService: RichiesteService,
        public appSessionService: AppSessionService,
        public loaderService: LoaderService
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
            this.showPage = true;
            this.loaderService.dismissLoader();
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
        this.goToPageParams('dettaglio-vino',
            { queryParams: { vinoselezionato: JSON.stringify(vino), reload: 'true', evento: JSON.stringify(this.evento) } });
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
        if (!this.evento.eventoRicorrente) {
            this.commonService.connect(this.richiesteService.getRichiestaAcquistaEvento(
                this.idUtente,
                this.evento.idEvento,
                this.evento.dataEvento,
                this.evento.dataEvento,
                0,
                1))
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
        } else {
            this.goToAcquistaRicorrente();
        }
    }

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        // this.scrollTop = event.target.scrollTop; <-- commentato perchè refresha il valore di scrolltop
    }

    public goToAcquistaRicorrente() {
        this.goToPageParams('acquistaevento', { queryParams: { eventoselezionato: JSON.stringify(this.evento), idutente: this.idUtente } });
    }

    public isAcquistoAbilitato() {
        if (this.evento.dettagliIscrittiEvento) {
            if (this.evento.dettagliIscrittiEvento.length >= 0) {
                for (const iscrittoEvento of this.evento.dettagliIscrittiEvento) {
                    if (iscrittoEvento.idUtente === this.idUtente) {
                        return false;
                    }
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
        return true;
    }

    public getDataEventoAcquistato() {
        if (this.evento.dettagliIscrittiEvento) {
            if (this.evento.dettagliIscrittiEvento.length >= 0) {
                for (const iscrittoEvento of this.evento.dettagliIscrittiEvento) {
                    if (iscrittoEvento.idUtente === this.idUtente) {
                        return iscrittoEvento.dataEvento;
                    }
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }
        return 0;
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    public doRefresh(event: any) {
        this.commonService.get(this.richiesteService.getRichiestaGetEventoUtente(
            this.evento.idEvento,
            this.evento.dataEvento,
            this.idUtente))
            .subscribe(r => {
                if (r.esito.codice === environment.ESITO_OK_CODICE) {
                    this.evento = r.evento;
                    event.target.complete();
                } else {
                    this.manageError(r);
                    event.target.complete();
                }
            }, err => {
                this.alertService.presentErrorAlert(err.statusText);
                event.target.complete();
            });
    }

}
