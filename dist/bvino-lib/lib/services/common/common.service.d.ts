import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { Observable } from 'rxjs';
import { RispostaPutGenerica } from '../../models/comunicazioni/richieste/put/rispostaputgenerica';
import { BVHttpService } from './bvhttp.service';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RispostaGetGenerica } from '../../models/comunicazioni/richieste/get/rispostagetgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
import { RispostaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/rispostanotificagenerica';
export declare class BVCommonService {
    private httpService;
    private env;
    constructor(httpService: BVHttpService, env: any);
    putNotifica(request: RichiestaNotificaGenerica): Observable<RispostaNotificaGenerica>;
    put(request: RichiestaPutGenerica): Observable<RispostaPutGenerica>;
    get(request: RichiestaGetGenerica): Observable<RispostaGetGenerica>;
}
