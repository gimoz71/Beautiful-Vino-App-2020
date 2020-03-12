import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StoreService {

    constructor(private storage: Storage) { }

    public clearUserData(): void {
        this.storage.clear();
    }

    public setData(key: string, object: any): number {
        if (object) {
            this.storage.set(key, object);
        } else {
            return -1;
        }
        return 1;
    }

    public getDataPromise(key: string) {
        return new Promise(resolve => {
            // store service prima inizializzaione
            this.storage.get(key).then((val: any) => {
                // recuperato dato dal database
                if (val != null) {
                    resolve(val);
                } else {
                    // devo andare alla pagina del login
                    resolve(null);
                }
            }
            );
        });
    }

    public removeData(key: string) {
        this.storage.remove(key);
    }
}
