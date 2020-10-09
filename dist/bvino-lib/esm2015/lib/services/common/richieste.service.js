/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
import { RichiestaConnectGenerica } from '../../models/comunicazioni/richieste/connect/richiestaconnectgenerica';
export class RichiesteService {
    /**
     * @param {?} env
     */
    constructor(env) {
        this.env = env;
    }
    // -------- GET --------
    /**
     * @return {?}
     */
    getRichiestaGetUtenti() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetUtentiAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @return {?}
     */
    getRichiestaGetUtente(idUtente) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtenteFunctionName;
        richiesta.idUtente = idUtente;
        return richiesta;
    }
    /**
     * @param {?} emailUtente
     * @return {?}
     */
    getRichiestaGetUtenteEmail(emailUtente) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtenteEmailFunctionName;
        richiesta.emailUtente = emailUtente;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetAziende() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendeFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetBadges() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getBadgesFunctionName;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetEventi() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiFunctionName;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetEventiAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    }
    /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    getRichiestaGetEventoUtente(idEvento, dataEvento, idUtente) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        richiesta.idUtente = idUtente;
        richiesta.dataEvento = dataEvento;
        return richiesta;
    }
    /**
     * @param {?} idEvento
     * @return {?}
     */
    getRichiestaGetEvento(idEvento) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetProvincie() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getProvincieFunctionName;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetFeed() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetFeedAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetVini() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getViniFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idVino
     * @return {?}
     */
    getRichiestaGetVino(idVino) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getVinoFunctionName;
        richiesta.idVino = idVino;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetViniAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.idAzienda = idAzienda;
        richiesta.functionName = this.env.getViniAziendaFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    getRichiestaGetProfiloAzienda(idProfiloAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.idProfiloAzienda = idProfiloAzienda;
        richiesta.functionName = this.env.getProfiloAziendaFunctionName;
        return richiesta;
    }
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    getRichiestaPutImmagine(file, filename, tipoEntita) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.base64Image = file;
        richiesta.filename = filename;
        richiesta.tipoEntita = tipoEntita;
        richiesta.functionName = this.env.putImmaginiFunctionName;
        return richiesta;
    }
    /**
     * @param {?} provincia
     * @return {?}
     */
    getRichiestaPutProvincia(provincia) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putProvinciaFunctionName;
        richiesta.provincia = provincia;
        return richiesta;
    }
    /**
     * @param {?} utente
     * @return {?}
     */
    getRichiestaPutUtente(utente) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUtenteFunctionName;
        richiesta.utente = utente;
        return richiesta;
    }
    /**
     * @param {?} evento
     * @return {?}
     */
    getRichiestaPutEvento(evento) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putEventoFunctionName;
        richiesta.evento = evento;
        return richiesta;
    }
    /**
     * @param {?} feed
     * @return {?}
     */
    getRichiestaPutFeed(feed) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putFeedFunctionName;
        richiesta.feed = feed;
        return richiesta;
    }
    /**
     * @param {?} vino
     * @return {?}
     */
    getRichiestaPutVino(vino) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putVinoFunctionName;
        richiesta.vino = vino;
        return richiesta;
    }
    /**
     * @param {?} azienda
     * @return {?}
     */
    getRichiestaPutAzienda(azienda) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putAziendaFunctionName;
        richiesta.azienda = azienda;
        return richiesta;
    }
    /**
     * @param {?} utente
     * @return {?}
     */
    getRichiestaPutuserProfileWithImage(utente) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUserProfileImageWithUserFunctionName;
        richiesta.utente = utente;
        return richiesta;
    }
    /**
     * @param {?} badge
     * @return {?}
     */
    getRichiestaPutBadge(badge) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putVinoFunctionName;
        richiesta.badge = badge;
        return richiesta;
    }
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    getRichiestaNotifica(messaggio) {
        /** @type {?} */
        const richiesta = new RichiestaNotificaGenerica();
        richiesta.messaggio = messaggio;
        return richiesta;
    }
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaAggiungiEventoAPreferiti(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'P';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} dataPrenotazioneEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @param {?} numeroPartecipanti
     * @return {?}
     */
    getRichiestaAcquistaEvento(idUtente, idEvento, dataEvento, dataPrenotazioneEvento, statoPreferitoEvento, statoAcquistatoEvento, numeroPartecipanti) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.dataPrenotazioneEvento = dataPrenotazioneEvento;
        richiesta.statoEvento = 'A';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        richiesta.numeroPartecipanti = numeroPartecipanti;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaRimuoviEventoDaPreferiti(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'D';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    }
}
RichiesteService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RichiesteService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RichiesteService.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUtqSCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW1DLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBRTNDLENBQUM7Ozs7O0lBSU0scUJBQXFCOztjQUNwQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSw0QkFBNEIsQ0FBQyxTQUFpQjs7Y0FDN0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0scUJBQXFCLENBQUMsUUFBZ0I7O2NBQ3JDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUU5QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLDBCQUEwQixDQUFDLFdBQW1COztjQUM3QyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7UUFDN0QsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFcEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLHNCQUFzQjs7Y0FDckIsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1FBRXpELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sc0JBQXNCLENBQUMsU0FBaUI7O2NBQ3ZDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0scUJBQXFCOztjQUNwQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLHFCQUFxQjs7Y0FDcEIsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBRXhELFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBRS9CLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sNEJBQTRCLENBQUMsU0FBaUI7O2NBQzdDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztRQUMvRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixTQUFTLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUUvQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7O0lBRU0sMkJBQTJCLENBQUMsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLFFBQWdCOztjQUNqRixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxRQUFnQjs7Y0FDckMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBRXhELFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTlCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFHTSx3QkFBd0I7O2NBQ3ZCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztRQUUzRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0sbUJBQW1COztjQUNsQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFFdEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSwwQkFBMEIsQ0FBQyxTQUFpQjs7Y0FDM0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO1FBQzdELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTSxtQkFBbUI7O2NBQ2xCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUV0RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLE1BQWM7O2NBQ2pDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUV0RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLDBCQUEwQixDQUFDLFNBQWlCOztjQUMzQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7UUFFN0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSw2QkFBNkIsQ0FBQyxnQkFBd0I7O2NBQ3JELFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7UUFFaEUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7SUFJTSx1QkFBdUIsQ0FBQyxJQUFTLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQjs7Y0FDdEUsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFFNUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbEMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1FBRTFELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sd0JBQXdCLENBQUMsU0FBb0I7O2NBQzVDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztRQUMzRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLE1BQWM7O2NBQ25DLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLE1BQWM7O2NBQ25DLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLElBQVU7O2NBQzdCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUdNLG1CQUFtQixDQUFDLElBQVU7O2NBQzdCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHNCQUFzQixDQUFDLE9BQWdCOztjQUN0QyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7UUFDekQsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxtQ0FBbUMsQ0FBQyxNQUFjOztjQUNqRCxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUM7UUFDMUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxvQkFBb0IsQ0FBQyxLQUFZOztjQUNoQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDdEQsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBR00sb0JBQW9CLENBQUMsU0FBaUI7O2NBQ3JDLFNBQVMsR0FBRyxJQUFJLHlCQUF5QixFQUFFO1FBQ2pELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7SUFHTSxvQ0FBb0MsQ0FDekMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsb0JBQTRCLEVBQUUscUJBQTZCOztjQUM3RyxTQUFTLEdBQUcsSUFBSSx3QkFBd0IsRUFBRTtRQUVoRCxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM5QixTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM5QixTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxTQUFTLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixTQUFTLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDdEQsU0FBUyxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ3hELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUVuRSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7Ozs7OztJQUVNLDBCQUEwQixDQUMvQixRQUFnQixFQUNoQixRQUFnQixFQUNoQixVQUFrQixFQUNsQixzQkFBOEIsRUFDOUIsb0JBQTRCLEVBQzVCLHFCQUE2QixFQUM3QixrQkFBMEI7O2NBQ3BCLFNBQVMsR0FBRyxJQUFJLHdCQUF3QixFQUFFO1FBRWhELFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUMxRCxTQUFTLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixTQUFTLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDdEQsU0FBUyxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ3hELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNuRSxTQUFTLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFFbEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7O0lBRU0sb0NBQW9DLENBQ3pDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG9CQUE0QixFQUFFLHFCQUE2Qjs7Y0FDN0csU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsU0FBUyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ3RELFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7UUFFbkUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBOVJGLFVBQVU7Ozs7NENBRUksTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7SUFBYiwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJpY2hpZXN0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaWNoaWVzdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgVXRlbnRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS91dGVudGUvdXRlbnRlJztcbmltcG9ydCB7IEV2ZW50byB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvZXZlbnRvL2V2ZW50byc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS9mZWVkL2ZlZWQnO1xuaW1wb3J0IHsgVmlubyB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvdmluby92aW5vJztcbmltcG9ydCB7IFByb3ZpbmNpYSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvcHJvdmluY2lhL3Byb3ZpbmNpYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL25vdGlmaWNhL3JpY2hpZXN0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhQ29ubmVjdEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2Nvbm5lY3QvcmljaGllc3RhY29ubmVjdGdlbmVyaWNhJztcbmltcG9ydCB7IEF6aWVuZGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL2F6aWVuZGEvYXppZW5kYSc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvYmFkZ2UvYmFkZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmljaGllc3RlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnkpIHtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0gR0VUIC0tLS0tLS0tXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50aSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRpRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGlBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50aUF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VXRlbnRlKGlkVXRlbnRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRlRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGVFbWFpbChlbWFpbFV0ZW50ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50ZUVtYWlsRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5lbWFpbFV0ZW50ZSA9IGVtYWlsVXRlbnRlO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRBemllbmRlKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRBemllbmRlRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEJhZGdlcygpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QmFkZ2VzRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudGkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50aUZ1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9ICcnO1xuICAgIHJpY2hpZXN0YS5lbGVuY29Db21wbGV0byA9ICdTJztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRpQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudGlBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG5cbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSAnJztcbiAgICByaWNoaWVzdGEuZWxlbmNvQ29tcGxldG8gPSAnUyc7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50b1V0ZW50ZShpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIGlkVXRlbnRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRvRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudG8oaWRFdmVudG86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudG9GdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRFdmVudG8gPSBpZEV2ZW50bztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRQcm92aW5jaWUoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFByb3ZpbmNpZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RmVlZCgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RmVlZEZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RmVlZEF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RmVlZEF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmluaSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VmluaUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmlubyhpZFZpbm86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5vRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkVmlubyA9IGlkVmlubztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmluaUF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5pQXppZW5kYUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0UHJvZmlsb0F6aWVuZGEoaWRQcm9maWxvQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmlkUHJvZmlsb0F6aWVuZGEgPSBpZFByb2ZpbG9BemllbmRhO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRQcm9maWxvQXppZW5kYUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICAvLyAtLS0tLS0tLSBQVVQgLS0tLS0tLS1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0SW1tYWdpbmUoZmlsZTogYW55LCBmaWxlbmFtZTogc3RyaW5nLCB0aXBvRW50aXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5iYXNlNjRJbWFnZSA9IGZpbGU7XG4gICAgcmljaGllc3RhLmZpbGVuYW1lID0gZmlsZW5hbWU7XG4gICAgcmljaGllc3RhLnRpcG9FbnRpdGEgPSB0aXBvRW50aXRhO1xuXG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEltbWFnaW5pRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRQcm92aW5jaWEocHJvdmluY2lhOiBQcm92aW5jaWEpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0UHJvdmluY2lhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5wcm92aW5jaWEgPSBwcm92aW5jaWE7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRVdGVudGUodXRlbnRlOiBVdGVudGUpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0VXRlbnRlRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS51dGVudGUgPSB1dGVudGU7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRFdmVudG8oZXZlbnRvOiBFdmVudG8pIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0RXZlbnRvRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5ldmVudG8gPSBldmVudG87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRGZWVkKGZlZWQ6IEZlZWQpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0RmVlZEZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuZmVlZCA9IGZlZWQ7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFZpbm8odmlubzogVmlubykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRWaW5vRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS52aW5vID0gdmlubztcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEF6aWVuZGEoYXppZW5kYTogQXppZW5kYSkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5hemllbmRhID0gYXppZW5kYTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dHVzZXJQcm9maWxlV2l0aEltYWdlKHV0ZW50ZTogVXRlbnRlKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFVzZXJQcm9maWxlSW1hZ2VXaXRoVXNlckZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEudXRlbnRlID0gdXRlbnRlO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0QmFkZ2UoYmFkZ2U6IEJhZGdlKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFZpbm9GdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmJhZGdlID0gYmFkZ2U7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIE5PVElGSUNBVElPTiAtLS0tLS0tLVxuICBwdWJsaWMgZ2V0UmljaGllc3RhTm90aWZpY2EobWVzc2FnZ2lvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5tZXNzYWdnaW8gPSBtZXNzYWdnaW87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIENPTk5FQ1QgLS0tLS0tLS1cbiAgcHVibGljIGdldFJpY2hpZXN0YUFnZ2l1bmdpRXZlbnRvQVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdQJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhQWNxdWlzdGFFdmVudG8oXG4gICAgaWRVdGVudGU6IHN0cmluZyxcbiAgICBpZEV2ZW50bzogc3RyaW5nLFxuICAgIGRhdGFFdmVudG86IG51bWJlcixcbiAgICBkYXRhUHJlbm90YXppb25lRXZlbnRvOiBudW1iZXIsXG4gICAgc3RhdG9QcmVmZXJpdG9FdmVudG86IG51bWJlcixcbiAgICBzdGF0b0FjcXVpc3RhdG9FdmVudG86IG51bWJlcixcbiAgICBudW1lcm9QYXJ0ZWNpcGFudGk6IG51bWJlcikge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5kYXRhRXZlbnRvID0gZGF0YUV2ZW50bztcbiAgICByaWNoaWVzdGEuZGF0YVByZW5vdGF6aW9uZUV2ZW50byA9IGRhdGFQcmVub3RhemlvbmVFdmVudG87XG4gICAgcmljaGllc3RhLnN0YXRvRXZlbnRvID0gJ0EnO1xuICAgIHJpY2hpZXN0YS5zdGF0b1ByZWZlcml0b0V2ZW50byA9IHN0YXRvUHJlZmVyaXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0FjcXVpc3RhdG9FdmVudG8gPSBzdGF0b0FjcXVpc3RhdG9FdmVudG87XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmNvbm5lY3RFdmVudG9BVXRlbnRlRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5udW1lcm9QYXJ0ZWNpcGFudGkgPSBudW1lcm9QYXJ0ZWNpcGFudGk7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVJpbXVvdmlFdmVudG9EYVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdEJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cbn1cbiJdfQ==