import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { BVCommonService, RichiesteService, Azienda, Evento, Vino } from 'bvino-lib';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-dettaglio-azienda',
    templateUrl: './dettaglio-azienda.page.html',
    styleUrls: ['./dettaglio-azienda.page.scss'],
})
export class DettaglioAziendaPage extends BaseComponent implements OnInit {

    // riportare nel base

    private unsubscribe$ = new Subject<void>();
    public azienda: Azienda;

    public showPage = false;

    scrollTop = 150;
    showNav = false;

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        // this.scrollTop = event.target.scrollTop; <-- commentato perchè refresha il valore di scrolltop
    }
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
        this.azienda = new Azienda();
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

        // fare anche un controllo della presenza dell'oggetto Azienda in sessione, in modo da ottimizzare e non chiamare sempre la app
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
        this.commonService.get(this.richiesteService.getRichiestaGetAzienda(idAzienda))
            .subscribe(r => {
                if (r.esito.codice === environment.ESITO_OK_CODICE) {
                    this.azienda = r.azienda;
                    this.showPage = true;
                } else {
                    this.manageError(r);

                }
            }, err => {
                this.alertService.presentErrorAlert(err.statusText);
            });
    }

    public dettaglioEvento(evento: Evento) {
        this.goToPageParams('dettaglio-evento', { queryParams: { eventoselezionato: JSON.stringify(evento), reload: 'false' } });
    }

    public dettaglioVino(vino: Vino) {
        this.goToPageParams('dettaglio-vino', { queryParams: { vinoselezionato: JSON.stringify(vino), reload: 'false' } });
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
