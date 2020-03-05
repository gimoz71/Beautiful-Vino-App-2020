import { Provincia } from '../../../entita/provincia/provincia';
import { Azienda } from '../../../entita/azienda/azienda';
import { Badge } from '../../../entita/badge/badge';
import { Evento } from '../../../entita/evento/evento';
import { Feed } from '../../../entita/feed/feed';
import { Utente } from '../../../entita/utente/utente';
import { Vino } from '../../../entita/vino/vino';
export declare class RichiestaPutGenerica {
    provincia: Provincia;
    azienda: Azienda;
    badge: Badge;
    evento: Evento;
    feed: Feed;
    utente: Utente;
    vino: Vino;
    base64Image: string;
    tipoEntita: string;
    filename: string;
    idUtente: string;
    functionName: string;
}
