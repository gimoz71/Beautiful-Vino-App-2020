import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Utente, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { ActionSheetController, Platform, LoadingController } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

import { environment } from 'src/environments/environmentkeys';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';

// const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-edit-profilo',
  templateUrl: './edit-profilo.page.html',
  styleUrls: ['./edit-profilo.page.scss'],
})
export class EditProfiloPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  scrollTop = 150;
  showNav = false;

  public utente: Utente;
  public reload = false;

  public images = [];

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
    this.utente = new Utente();
  }

  ionViewDidEnter() {
    this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'edit-profilo');

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
      this.utente = JSON.parse(params.utente) as Utente;
    });
  }

  ngOnInit() {
  }

  public salvaUtente() {
    console.log('Salvataggio Utente');
  }

  public profiloUtente() {
    this.goToPage('profilo');
  }

  onScroll(event) {
    this.showNav = this.scrollTop < event.target.scrollTop;
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
