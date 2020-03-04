import { Utente, ProfiloAzienda } from 'bvino-lib';
import { Injectable } from '@angular/core';


@Injectable()
export class StoreService {

    private USERKEY = 'user';
    private PROFILOKEY = 'profiloAzienda';

    private utente: Utente;
    private profiloAzienda: ProfiloAzienda;

    constructor(private storage: Storage) {
        this.utente = new Utente();
        this.profiloAzienda = new ProfiloAzienda();
    }

    public clearUserData(): void {
        this.storage.clear();
    }

    public setUserData(utente: Utente): number {
        console.log('setting user data: ' + utente.usernameUtente);
        this.utente = utente;
        if (utente != null) {
            this.storage.set(this.USERKEY, utente).then((val) => {
                console.log(val);
            });
        } else {
            return -1;
        }
        return 1;
    }

    public setProfiloAziendaData(profilo: ProfiloAzienda): number {
        console.log('setting profiloazienda data: ' + profilo.nomeAzienda);
        this.profiloAzienda = profilo;
        if (profilo != null) {
            this.storage.set(this.USERKEY, profilo).then((val) => {
                console.log(val);
            });
        } else {
            return -1;
        }
        return 1;
    }

    public getUserDataPromise() {
        return new Promise(resolve => {
            if (this.utente == null) {
                // store service prima inizializzaione
                this.storage.get(this.USERKEY).then((val: Utente) => {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    } else {
                        console.log('necessario login');
                        this.setUserData(null);
                        this.utente = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }
                );
            } else {
                // store service già inizializzato
                resolve(this.utente);
            }
        });
    }

    public getProfiloAziendaDataPromise() {
        return new Promise(resolve => {
            if (this.profiloAzienda == null) {
                // store service prima inizializzaione
                this.storage.get(this.PROFILOKEY).then((val: ProfiloAzienda) => {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    } else {
                        console.log('necessario login');
                        this.setProfiloAziendaData(null);
                        this.profiloAzienda = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }
                );
            } else {
                // store service già inizializzato
                resolve(this.profiloAzienda);
            }
        });
    }
}
