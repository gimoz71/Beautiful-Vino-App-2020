import { Component, OnInit, HostBinding } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppSessionService } from './services/appsession/appSession.service';
import { environment } from 'src/environments/environment';
import { ColorChangeCommunicationService } from './services/colorChangeCommunication/colorchangecommunication.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    firstColor = '#66bb6a'; /* default BV #e51d70 */
    secondColor = '#f9da2c'; /* Default BV #f9da2c */

    private selectedPage = 'eventi';

    ngOnInit(): void {

    }

    @HostBinding('attr.style')
    public get valueAsStyle(): any {
        return this.sanitizer.bypassSecurityTrustStyle(`--first-color: ${this.firstColor}; --second-color: ${this.secondColor};`);
    }
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private sanitizer: DomSanitizer,
        private router: Router,
        private appSessionService: AppSessionService,
        private colorComm: ColorChangeCommunicationService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.colorComm.colorObservable.subscribe(r => {
            if (r) {
                this.firstColor = this.appSessionService.get(environment.KEY_AZIENDA_COLOREPRIMARIO);
                this.secondColor = this.appSessionService.get(environment.KEY_AZIENDA_COLORESECONDARIO);
            }
        });

    }

    public barVisible(): boolean {
        return this.router.url === '/eventi' ||
            this.router.url === '/scopri' ||
            this.router.url === '/vini' ||
            this.router.url === '/profilo';
    }

    public goToPage(pageName: string): void {
        this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, pageName);
        this.router.navigate([pageName]);
    }

    public isPage(pageName: string): boolean {
        return pageName === this.appSessionService.get(environment.KEY_PAGINA_SELEZIONATA);
    }
}

