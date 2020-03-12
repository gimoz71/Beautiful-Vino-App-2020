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
            this.ngZone.run(() => this.router.navigate(['login'])).then();
        });

        this.route.queryParams.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(params => {
            this.reload = params.reload === 'true';
            this.evento = JSON.parse(params.eventoselezionato) as Evento;
            if (this.reload) {
                // devo ricaricare l'evento
                this.reloadEvento();
            }
        });
    }

    public reloadEvento() {
        this.commonService.get(this.richiesteService.getRichiestaGetEvento(this.evento.idEvento)).subscribe(r => {
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

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        // this.scrollTop = event.target.scrollTop; <-- commentato perchè refresha il valore di scrolltop
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
