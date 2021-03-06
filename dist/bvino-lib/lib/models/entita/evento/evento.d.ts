import { Azienda } from '../azienda/azienda';
import { BadgeEvento } from './badgeevento';
import { ProvinciaEvento } from './provinciaevento';
import { AziendaEvento } from './aziendaevento';
import { UtenteEvento } from './utenteevento';
import { VinoEvento } from './vinoevento';
import { Vino } from '../vino/vino';
import { Badge } from '../badge/badge';
import { Provincia } from '../provincia/provincia';
import { Utente } from '../utente/utente';
export declare class Evento {
    idEvento: string;
    dataEvento: number;
    dataPrenotazioneEvento: number;
    dataEventoa: string;
    cittaEvento: string;
    titoloEvento: string;
    temaEvento: string;
    prezzoEvento: number;
    urlFotoEvento: string;
    statoEvento: string;
    statoPreferitoEvento: string;
    testoEvento: string;
    latitudineEvento: number;
    longitudineEvento: number;
    indirizzoEvento: string;
    telefonoEvento: string;
    facebookEvento: string;
    emailEvento: string;
    numMaxPartecipantiEvento: number;
    numPostiDisponibiliEvento: number;
    acquistabileEvento: number;
    creditiEvento: number;
    puntiEsperienza: number;
    pubblicatoEvento: boolean;
    badgeEvento: Badge;
    provinciaEvento: Provincia;
    aziendaOspitanteEvento: Azienda;
    iscrittiEvento: Array<Utente>;
    dettagliIscrittiEvento: Array<UtenteEvento>;
    viniEvento: Array<Vino>;
    badgeEventoInt: BadgeEvento;
    provinciaEventoInt: ProvinciaEvento;
    aziendaOspitanteEventoInt: AziendaEvento;
    aziendaFornitriceEventoInt: AziendaEvento;
    iscrittiEventoInt: Array<UtenteEvento>;
    viniEventoInt: Array<VinoEvento>;
    aziendeViniEvento: Array<Azienda>;
    eventoRicorrente: boolean;
    dateRicorrenti: Array<number>;
    oldDate: number;
    oldIdAzienda: string;
}
