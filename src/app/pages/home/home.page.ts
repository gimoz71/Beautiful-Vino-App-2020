import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AppSessionService } from 'src/app/services/appsession/appSession.service';
import { environment } from 'src/environments/environmentkeys';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {

  public loginImages = 'url(https://www.stockvault.net/data/2019/08/28/268829/preview16.jpg)';

  constructor(
    public router: Router,
    public alertService: AlertService,
    private appSessionService: AppSessionService
  ) {
    super(router, alertService);
  }

  ngOnInit() {
    // controllo se ho una pagina in sessione già visitata
    // this.appSessionService.set(environment.KEY_PAGINA_SELEZIONATA, 'eventi');
    if (this.appSessionService.isInSession(environment.KEY_AUTH_TOKEN)) {
      this.inizializzaApp();
    } else {
      // provo a estrarre il token dallo storage
      console.log('--------- HOME ---------- : provo a estrarre il token dallo storage (in sessione era assente)');
      this.appSessionService.loadDataFromStorage(environment.KEY_AUTH_TOKEN).then((val: string) => {
        if (val !== undefined && val !== null && val !== '') {
          console.log('--------- HOME ---------- : token trovato in storage: ' + val + '; lo salvo in sessione e '
            + 'procedo con l inizializzazione');

          this.appSessionService.set(environment.KEY_AUTH_TOKEN, this.decodeObjectInStorage(val));
          this.inizializzaApp();
        } else {
          console.log('--------- HOME ---------- : manca il token anche in storage, necessario login');
          this.goToPage('login'); // manca il token anche in storage, necessario login
        }
      });
    }
  }

  public inizializzaApp() {
    if (this.appSessionService.isInSession(environment.KEY_PAGINA_SELEZIONATA)) {
      this.goToPage(this.appSessionService.get(environment.KEY_PAGINA_SELEZIONATA));
    } else {
      this.appSessionService.loadDataFromStorage(environment.KEY_PAGINA_SELEZIONATA).then((val: string) => {
        if (val !== undefined && val !== null && val !== '') {
          this.goToPage(this.decodeObjectInStorage(val));
        } else {
          this.goToPage('eventi');
        }
      });
    }
  }

  public goToLogin() {
    this.goToPage('login');
  }

  public registrati() {
    this.alertService.presentAlert('NON ANCORA IMPLEMENTATA');
  }

}
