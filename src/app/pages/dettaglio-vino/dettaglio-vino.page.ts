import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Evento, Vino, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environmentkeys';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
    selector: 'app-dettaglio-evento',
    templateUrl: './dettaglio-vino.page.html',
    styleUrls: ['./dettaglio-vino.page.scss'],
})
export class DettaglioVinoPage extends BaseComponent implements OnInit {

    private unsubscribe$ = new Subject<void>();

    scrollTop = 150;
    showNav = false;

    public vino: Vino;
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
        this.vino = new Vino();
    }

    ionViewDidEnter() {
        this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'dettaglio-feed');

        this.logoutComm.logoutObservable.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(r => {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
            this.ngZone.run(() => this.router.navigate(['home'])).then();
        });

        this.route.queryParams.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(params => {
            this.reload = params.reload === 'true';
            this.vino = JSON.parse(params.vinoselezionato) as Vino;
            if (this.reload) {
                // devo ricaricare il vino
                this.reloadVino();
            }
        });
    }

    public reloadVino() {
        this.commonService.get(this.richiesteService.getRichiestaGetVino(this.vino.idVino)).subscribe(r => {
            if (r.esito.codice === environment.ESITO_OK_CODICE) {
                this.vino = r.vino;
            } else {
                this.manageError(r);
            }
        }, err => {
            this.alertService.presentErrorAlert(err.statusText);
        });
    }

    ngOnInit() {
    }

    public dettaglioEvento(evento: Evento) {
        console.log('vado al dettaglio evento: ' + evento.titoloEvento);
    }

    public elencoVini() {
        this.goToPage('vini');
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
