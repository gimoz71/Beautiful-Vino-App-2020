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

    // default, nel caso non fossero nel p
    firstColor = environment.colorePrimario; /* default BV #e51d70 */
    secondColor = environment.coloreSecondario; /* Default BV #f9da2c */

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

        // this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_COLOREPRIMARIO).then((val) => {
        //     if (val && val !== '') {
        //         this.firstColor = window.atob(val);
        //         this.appSessionService.set(environment.KEY_AZIENDA_COLOREPRIMARIO, val);
        //     }
        // });

        // this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_COLORESECONDARIO).then((val) => {
        //     if (val && val !== '') {
        //         this.secondColor = window.atob(val);
        //         this.appSessionService.set(environment.KEY_AZIENDA_COLORESECONDARIO, val);
        //     }
        // });

        this.appSessionService.set(environment.KEY_AZIENDA_COLOREPRIMARIO, this.firstColor);
        this.appSessionService.set(environment.KEY_AZIENDA_COLORESECONDARIO, this.secondColor);

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        // this.colorComm.colorObservable.subscribe(r => {
        //     if (r) {
        //         const tempFirst = this.appSessionService.get(environment.KEY_AZIENDA_COLOREPRIMARIO);
        //         if (tempFirst && tempFirst !== '') {
        //             this.firstColor = tempFirst;
        //         } else {
        //             this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_COLOREPRIMARIO).then((val) => {
        //                 if (val && val !== '') {
        //                     this.firstColor = window.atob(val);
        //                     this.appSessionService.set(environment.KEY_AZIENDA_COLOREPRIMARIO, val);
        //                 }
        //             });
        //         }

        //         const tempSecond = this.appSessionService.get(environment.KEY_AZIENDA_COLORESECONDARIO);
        //         if (tempSecond && tempSecond !== '') {
        //             this.firstColor = tempSecond;
        //         } else {
        //             this.appSessionService.loadDataFromStorage(environment.KEY_AZIENDA_COLORESECONDARIO).then((val) => {
        //                 if (val && val !== '') {
        //                     this.firstColor = window.atob(val);
        //                     this.appSessionService.set(environment.KEY_AZIENDA_COLORESECONDARIO, val);
        //                 }
        //             });
        //         }
        //     }
        // });
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

