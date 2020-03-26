import { Azienda } from '../../../entita/azienda/azienda';
import { Badge } from '../../../entita/badge/badge';
import { Vino } from '../../../entita/vino/vino';
import { Utente } from '../../../entita/utente/utente';
export declare class RichiestaConnectGenerica {
    functionName: string;
    badges: Array<Badge>;
    idUtente: string;
    idEvento: string;
    idVino: string;
    dataEvento: number;
    dataPrenotazioneEvento: number;
    statoEvento: string;
    statoVino: string;
    statoUtente: string;
    viniAzienda: Array<Vino>;
    utenti: Array<Utente>;
    idAzienda: string;
    aziendeViniDaAssociare: Array<Azienda>;
    numeroPartecipanti: number;
    statoPreferitoEvento: number;
    statoAcquistatoEvento: number;
}
