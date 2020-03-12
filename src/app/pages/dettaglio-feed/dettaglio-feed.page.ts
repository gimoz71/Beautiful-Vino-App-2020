import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Evento, Azienda, Vino, Feed, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environmentkeys';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

@Component({
    selector: 'app-dettaglio-feed',
    templateUrl: './dettaglio-feed.page.html',
    styleUrls: ['./dettaglio-feed.page.scss'],
})
export class DettaglioFeedPage extends BaseComponent implements OnInit {

    private unsubscribe$ = new Subject<void>();

    scrollTop = 150;
    showNav = false;

    public feed: Feed;
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
        this.feed = new Feed();
    }

    ionViewDidEnter() {
        this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'dettaglio-feed');

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
            this.feed = JSON.parse(params.feedselezionato) as Feed;
        });
    }

    ngOnInit() {
    }

    public confermaLettura() {
        console.log('Conferma Lettura Feed');
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
