import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
import { BVAuthorizationService, BVCommonService, RichiesteService, Utente } from 'bvino-lib';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { CodeDeliveryDetailsType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { environment } from 'src/environments/environmentkeys';
import { ThemeChangerService } from 'src/app/services/themeChanger/themechanger.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';
import { ColorChangeCommunicationService } from '../../services/colorChangeCommunication/colorchangecommunication.service';
import { AuthComponent } from '../../components/auth/auth.component';
import { LoaderService } from 'src/app/services/loader/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends AuthComponent implements OnInit {

  registerColor = '#462B35';

  firstColor = '#e51d70';
  secondColor = '#f9da2c';

  public username: string;
  public password: string;

  constructor(
    public authService: BVAuthorizationService,
    public router: Router,
    public appSessionService: AppSessionService,
    public alertService: AlertService,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    public themeChanger: ThemeChangerService,
    public colorChangeComm: ColorChangeCommunicationService,
    public loaderService: LoaderService) {
    super(router, alertService, appSessionService, commonService, richiesteService, authService, colorChangeComm, loaderService);

  }

  ngOnInit() {
  }

  public forgotPassword() {
    if (this.username === undefined || this.username === '') {
      this.alertService.presentErrorAlert('username obbligatorio');
    } else {
      this.authService.forgotPassword(this.username).subscribe((response: CodeDeliveryDetailsType) => {
        this.alertService.presentAlert('Inviata richiesta di recupero password per ' + this.username + ' controllare la mail');
      });
    }
  }

  public loginApp() {
    this.login(this.username, this.password);
  }

  public loginFacebook() {
    this.alertService.presentAlert('NON ANCORA IMPLEMENTATA');
  }

  public loginGoogle() {
    this.alertService.presentAlert('NON ANCORA IMPLEMENTATA');
  }
}
