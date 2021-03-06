import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Utente, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environmentkeys';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { FileuploadService } from '../../services/bvfileupload/fileupload.service';
import { AlertController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader/loader.service';

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

  public urlUtenteCambiata = false;

  private folder = 'immagineutente';

  public imgPreview = '';

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
    public uploadService: FileuploadService,
    public alertController: AlertController,
    public loaderService: LoaderService
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
      this.ngZone.run(() => this.router.navigate(['home'])).then();
    });

    this.route.queryParams.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(params => {
      this.reload = params.reload === 'true';
      console.log('params: ' + JSON.stringify(params));
      if (params === undefined || params.utente === undefined || params.utente === '') {
        if (this.appSessionService.isInSession(environment.KEY_USER_ID)) {
          this.caricaUtenteEmail(this.appSessionService.get(environment.KEY_USER_EMAIL));
        } else {
          this.appSessionService.loadDataFromStorage(environment.KEY_USER_EMAIL).then((val: string) => {
            if (val !== undefined && val !== null && val !== '') {
              const decodedVal = this.decodeObjectInStorage(val);
              this.caricaUtenteEmail(decodedVal);
            } else {
              this.appSessionService.clearForLogout();
            }
          });
        }
      } else {
        this.utente = JSON.parse(params.utente) as Utente;
        this.imgPreview = this.utente.urlFotoUtente;
      }
    });
  }

  ngOnInit() {
  }

  public salvaUtente() {
    console.log('Salvataggio Utente');
    if (this.urlUtenteCambiata) {
      this.loaderService.presentLoader('salvataggio immagine');
      this.uploadService.upload(this.imgPreview, this.folder).then((res) => {
        console.log('Response' + res);
        this.imgPreview = res as string;
        this.utente.urlFotoUtente = res as string;
        this.loaderService.dismissLoader();
        // salvo l'utente e poi lo ricarico
        this.salva();
      }, err => {
        console.log('Error is', err);
      });
    } else {
      this.salva();
    }
  }

  private salva() {
    this.loaderService.presentLoader('salvataggio utente');
    this.commonService.put(this.richiesteService.getRichiestaPutUtente(this.utente)).subscribe(r => {
      this.loaderService.dismissLoader();
      if (r.idUtente) {
        this.caricaUtente(r.idUtente);
      } else {
        this.manageErrorPut('Utente');
      }
    }, err => {

    });
  }

  public caricaUtente(idUtente: string) {
    this.loaderService.presentLoader('carica utente');
    this.commonService.get(this.richiesteService.getRichiestaGetUtente(idUtente)).subscribe(r => {
      this.loaderService.dismissLoader();
      if (r.esito.codice === environment.ESITO_OK_CODICE) {
        this.alertService.presentAlert('utente aggiornato correttamente');
        this.utente = r.utente;
        this.imgPreview = this.utente.urlFotoUtente;
        this.appSessionService.set(environment.KEY_UTENTE, JSON.stringify(this.utente));
        this.showPage = true;
      } else {
        this.manageError(r);
      }
    });
  }

  public caricaUtenteEmail(emailUtente: string) {
    this.loaderService.presentLoader('carica utente');
    this.commonService.get(this.richiesteService.getRichiestaGetUtenteEmail(emailUtente)).subscribe(r => {
      this.loaderService.dismissLoader();
      if (r.esito.codice === environment.ESITO_OK_CODICE) {
        // this.alertService.presentAlert('utente aggiornato correttamente');
        this.utente = r.utente;
        this.imgPreview = this.utente.urlFotoUtente;
        this.appSessionService.set(environment.KEY_UTENTE, JSON.stringify(this.utente));
        this.showPage = true;
      } else {
        this.manageError(r);
      }
    });
  }

  public profiloUtente() {
    this.goToPage('profilo');
  }

  public changeProfileImage(event) {
    this.imgPreview = event;
    this.urlUtenteCambiata = true;
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Sicuro di voler uscire?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.appSessionService.clearForLogout();
          }
        }
      ]
    });

    await alert.present();
  }

  onScroll(event) {
    this.showNav = this.scrollTop < event.target.scrollTop;
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
