import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RispostaGetGenerica } from '../../models/comunicazioni/richieste/get/rispostagetgenerica';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RispostaPutGenerica } from '../../models/comunicazioni/richieste/put/rispostaputgenerica';
import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
import { RispostaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/rispostanotificagenerica';
import { RichiestaConnectGenerica } from '../../models/comunicazioni/richieste/connect/richiestaconnectgenerica';
import { RispostaConnectGenerica } from '../../models/comunicazioni/richieste/connect/rispostaconnectgenerica';
export declare class BVHttpService {
    private http;
    private backEnd;
    private env;
    constructor(http: HttpClient, backEnd: HttpBackend, env: any);
    post(path: string, request: RichiestaGetGenerica): Observable<RispostaGetGenerica>;
    postPut(path: string, request: RichiestaPutGenerica): Observable<RispostaPutGenerica>;
    postNotifica(path: string, request: RichiestaNotificaGenerica): Observable<RispostaNotificaGenerica>;
    postConnect(path: string, request: RichiestaConnectGenerica): Observable<RispostaConnectGenerica>;
}
