import { Azienda } from '../azienda/azienda';
import { Evento } from '../evento/evento';
import { Utente } from '../utente/utente';
import { AziendaVino } from './aziendavino';
import { EventoVino } from './eventovino';
import { UtenteVino } from './utentevino';
export declare class Vino {
    idVino: string;
    nomeVino: string;
    annoVino: number;
    inBreveVino: string;
    descrizioneVino: string;
    infoVino: string;
    uvaggioVino: string;
    regioneVino: string;
    profumoVino: string;
    urlLogoVino: string;
    urlImmagineVino: string;
    statoVino: string;
    prezzoVino: number;
    acquistabileVino: number;
    aziendaVino: Azienda;
    eventiVino: Array<Evento>;
    utentiVino: Array<Utente>;
    aziendaVinoInt: AziendaVino;
    eventiVinoInt: Array<EventoVino>;
    utentiVinoInt: Array<UtenteVino>;
}
