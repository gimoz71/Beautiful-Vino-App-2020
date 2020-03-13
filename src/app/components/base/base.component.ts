import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RispostaGetGenerica } from 'bvino-lib';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {

  constructor(
    public router: Router,
    public alertService: AlertService
  ) { }

  ngOnInit() { }

  public goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

  public goToPageParams(pageName: string, params: any): void {
    this.router.navigate([pageName], params);
  }

  public manageError(response: RispostaGetGenerica) {
    this.alertService.presentErrorAlert(response.esito.message);
  }

  public manageErrorPut(tipo: string) {
    this.alertService.presentErrorAlert('Problemi durante il salvataggio dell entità di tipo ' + tipo);
  }

  public manageHttpError(error: any) {
    if (error instanceof TimeoutError) {
      this.alertService.presentErrorAlert('Timeout scaduto');
    } else {
      this.alertService.presentErrorAlert('Si è verificato un errore nella richiesta: ' + error.statusText);
    }
  }

  public decodeObjectInStorage(val: string) {
    return escape(window.atob(val));
  }

  protected loadToken(): void {

  }
}
