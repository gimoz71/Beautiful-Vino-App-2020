import { Injectable } from '@angular/core';
import { SessionService } from 'bvino-lib';
import { LogoutCommunicationService } from '../logoutCommunication/logoutcommunication.service';
import { StoreService } from '../store/store.service';

/**
 * Wrapper per la sessione in libreria
 * che aggiunge la gestione dello storage
 *
 */
@Injectable()
export class AppSessionService {

  constructor(
    private sessionService: SessionService,
    private logoutComm: LogoutCommunicationService,
    private storeService: StoreService) { }

  /**
   * controlla sia nella sessione che nei cookies. La precedenza va alla sessione per velocizzare le operazioni
   *
   *
   */
  public get(key: string) {
    return this.sessionService.get(key);
  }

  public loadDataFromStorage(key: string): Promise<any> {
    return this.storeService.getDataPromise(key);
  }

  public isInSession(key: string): boolean {
    const objectInSession = this.sessionService.get(key);
    return objectInSession !== null && objectInSession !== undefined && objectInSession !== '';
  }

  public set(key: string, value: string) {
    this.sessionService.set(key, value);
    const encodedValue = window.btoa(value);
    this.storeService.setData(key, encodedValue);
  }

  // cancellazione e svuotamento da fare
  public async deleteKey(key: string) {
    this.sessionService.deleteKey(key);
    await this.storeService.removeData(key);
  }

  public async clearAll() {
    this.sessionService.clearSession();
    this.storeService.clearUserData();
  }

  public async clearForLogout() {
    await this.clearAll();
    this.logoutComm.comunicateLogout();
  }

}
