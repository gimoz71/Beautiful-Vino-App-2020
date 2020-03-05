import { Injectable } from '@angular/core';
import { SessionService } from 'bvino-lib';
import { LogoutCommunicationService } from '../logoutCommunication/logoutcommunication.service';

/**
 *Wrapper per la sessione in libreria che aggiunge la gestione dei cookies
 *
 */
@Injectable()
export class AppSessionService {

  constructor(
    private sessionService: SessionService,
    private logoutComm: LogoutCommunicationService) { }

  /**
   * controlla sia nella sessione che nei cookies. La precedenza va alla sessione per velocizzare le operazioni
   *
   *
   */
  public get(key: string): string {
    const objectInSession = this.sessionService.get(key);
    if (objectInSession === undefined || objectInSession === null) {
      // non c'è l'oggetto in sessione. Controllo se è nei cookies
      // const objectInCookiesEncoded = this.cookieService.get(key); // usiamo le stesse chiavi
      // if (objectInCookiesEncoded === undefined || objectInCookiesEncoded === null || objectInCookiesEncoded === '') {
      //   // non ho trovato niente ne' in sessione, ne' tra i cookies
      //   return '';
      // } else {
      //   return window.atob(objectInCookiesEncoded);
      // }
    } else {
      // this.cookieService.set(key, window.btoa(objectInSession));
      return objectInSession;
    }
  }

  public set(key: string, value: string): void {
    this.sessionService.set(key, value);
    const encodedValue = window.btoa(value);
    // this.cookieService.set(key, encodedValue, null, '/');
  }

  // cancellazione e svuotamento da fare
  public deleteKey(key: string): void {
    this.sessionService.deleteKey(key);
    // this.cookieService.delete(key);
  }

  public clearAll(): void {
    this.sessionService.clearSession();
    // this.cookieService.deleteAll('/');
  }

  public clearForLogout() {
    this.clearAll();
    this.logoutComm.comunicateLogout();
  }
}