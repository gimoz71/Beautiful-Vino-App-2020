import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
import { BVAuthorizationService, BVCommonService, RichiesteService, Utente } from 'bvino-lib';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { environment } from 'src/environments/environmentkeys';
import { ThemeChangerService } from 'src/app/services/themeChanger/themechanger.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';
import { ColorChangeCommunicationService } from '../../services/colorChangeCommunication/colorchangecommunication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {

  registerColor = '#462B35';

  firstColor = '#e51d70';
  secondColor = '#f9da2c';

  public username: string;
  public password: string;

  constructor(
    private authService: BVAuthorizationService,
    public router: Router,
    public appSessionService: AppSessionService,
    public alertService: AlertService,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    public themeChanger: ThemeChangerService,
    public colorChangeComm: ColorChangeCommunicationService) {
    super(router, alertService);
  }

  ngOnInit() {
  }

  login() {
    this.authService.signin(this.username, this.password).subscribe(

      (response: CognitoUserSession) => {
        const accessToken = response.getAccessToken();
        const idToken = response.getIdToken();
        const idUtenteDb = idToken.payload['cognito:username'];

        this.appSessionService.set(environment.KEY_USER_ID, idUtenteDb);

        // per l'interceptor per le richieste da adesso in avanti
        this.appSessionService.set(environment.KEY_AUTH_TOKEN, idToken.getJwtToken());
        this.appSessionService.set(environment.KEY_USER, JSON.stringify(response));

        if (idUtenteDb === undefined || idUtenteDb === '') {
          this.alertService.presentErrorAlert('Utente loggato ma manca il corrispondente sul DB. Non posso procedere');
          this.router.navigate(['/login']);
        } else {
          this.commonService.get(this.richiesteService.getRichiestaGetUtente(idUtenteDb)).subscribe(r => {
            if (r.esito.codice === environment.ESITO_OK_CODICE) {
              const utente = r.utente as Utente;
              this.appSessionService.set(environment.KEY_UTENTE, JSON.stringify(utente));
              if (utente.idProfiloAziendaUtente !== undefined && utente.idProfiloAziendaUtente !== '') {
                this.commonService.get(this.richiesteService.getRichiestaGetProfiloAzienda(utente.idProfiloAziendaUtente)).subscribe(s => {
                  if (s.esito.codice === environment.ESITO_OK_CODICE) {
                    const profiloAzienda = s.profiloAzienda;

                    this.themeChanger.loadStyle(profiloAzienda.idAzienda + '.css');

                    this.appSessionService.set(environment.KEY_AZIENDA_ID, profiloAzienda.idAzienda);
                    this.appSessionService.set(environment.KEY_AZIENDA_NOME, profiloAzienda.nomeAzienda);
                    this.appSessionService.set(environment.KEY_AZIENDA_LOGO, profiloAzienda.logo);
                    this.appSessionService.set(environment.KEY_AZIENDA_SPLASHSCREEN, profiloAzienda.splaqshScreen);
                    this.appSessionService.set(environment.KEY_AZIENDA_PAYPAL_CODE, profiloAzienda.paypalCode);

                    if (profiloAzienda.colorePrimario && profiloAzienda.colorePrimario !== ''
                      && profiloAzienda.coloreSecondario && profiloAzienda.coloreSecondario !== '') {
                      this.appSessionService.set(environment.KEY_AZIENDA_COLOREPRIMARIO, profiloAzienda.colorePrimario);
                      this.appSessionService.set(environment.KEY_AZIENDA_COLORESECONDARIO, profiloAzienda.coloreSecondario);

                      this.colorChangeComm.comunicateColorChange();
                    }

                    this.router.navigate(['/eventi']);

                  } else {
                    this.alertService.presentErrorAlert(s.esito.message);
                  }
                }, err2 => {
                  this.alertService.presentErrorAlert(err2.statusText);
                });
              } else {
                // profilo generico
              }

              // ora devo recuperare il profiloAzienda

            } else {
              this.alertService.presentErrorAlert(r.esito.message);
            }
          }, err => {
            this.alertService.presentErrorAlert(err.statusText);
          });
        }
      },
      (err) => {
        this.alertService.presentErrorAlert('Errore di autenticazione');
        console.log('ERRORE DI AUTENTICAZIONE: ' + err);
      });
  }
}
