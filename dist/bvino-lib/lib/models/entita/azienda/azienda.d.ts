import { EventoAzienda } from './eventoazienda';
import { VinoAzienda } from './vinoazienda';
import { Evento } from '../evento/evento';
import { Vino } from '../vino/vino';
export declare class Azienda {
    idAzienda: string;
    zonaAzienda: string;
    nomeAzienda: string;
    infoAzienda: string;
    descrizioneAzienda: string;
    cittaAzienda: string;
    regioneAzienda: string;
    indirizzoAzienda: string;
    latitudineAzienda: number;
    longitudineAzienda: number;
    urlLogoAzienda: string;
    urlImmagineAzienda: string;
    sitoAzienda: string;
    emailAzienda: string;
    emailSecondariaAzienda: string;
    telefonoAzienda: string;
    eventiAzienda: Array<Evento>;
    viniAzienda: Array<Vino>;
    eventiAziendaInt: Array<EventoAzienda>;
    viniAziendaInt: Array<VinoAzienda>;
    numEventiAzienda: number;
    numViniAzienda: number;
    active: boolean;
}
