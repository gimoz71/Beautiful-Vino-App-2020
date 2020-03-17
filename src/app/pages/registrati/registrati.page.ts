import { Component, OnInit } from '@angular/core';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { BVAuthorizationService, BVCommonService, RichiesteService, Utente } from 'bvino-lib';
import { Router } from '@angular/router';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CodeDeliveryDetailsType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { ColorChangeCommunicationService } from 'src/app/services/colorChangeCommunication/colorchangecommunication.service';
import { environment } from 'src/environments/environmentkeys';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.page.html',
  styleUrls: ['./registrati.page.scss'],
})
export class RegistratiPage extends AuthComponent implements OnInit {


  public name: string;
  public email: string;
  public password: string;
  public passwordConfirm: string;

  constructor(
    public authService: BVAuthorizationService,
    public router: Router,
    public appSessionService: AppSessionService,
    public alertService: AlertService,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    public colorChangeComm: ColorChangeCommunicationService) {
    super(router, alertService, appSessionService, commonService, richiesteService, authService, colorChangeComm);

    this.name = '';
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  ngOnInit() {
  }

  public registrati() {
    // controlli di validita'
    if (this.email === '' || this.password === '' || this.passwordConfirm === '' || this.name === '') {
      this.alertService.presentAlert('Tutti i dati sono obbligatori');
      return;
    }
    if (this.password !== this.passwordConfirm) {
      this.alertService.presentAlert('Le password non corrispondono');
      return;
    }
    // eventuali altri controlli
    this.authService.signup(this.email, this.password, this.name).subscribe((res: CodeDeliveryDetailsType) => {
      this.alertService.presentAlert(JSON.stringify(res));

      // registrazione andata a buon fine, procedo con il login;
      this.loginAfterSignup(this.email, this.password, this.name);
    }, err => {
      this.alertService.presentErrorAlert(JSON.stringify(err));
    });
  }

  public registratiFb() {
    this.alertService.presentAlert('servizio non implementato');
  }

  public registratiG() {
    this.alertService.presentAlert('servizio non implementato');
  }
}
