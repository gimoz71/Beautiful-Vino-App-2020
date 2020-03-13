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
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaAcquistaEvento(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'A';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUdqSCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW1DLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBRTNDLENBQUM7Ozs7O0lBSU0scUJBQXFCOztjQUNwQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSw0QkFBNEIsQ0FBQyxTQUFpQjs7Y0FDN0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0scUJBQXFCLENBQUMsUUFBZ0I7O2NBQ3JDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxx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Qjs7Y0FDN0csU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsU0FBUyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ3RELFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7UUFFbkUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7O0lBRU0sb0NBQW9DLENBQ3pDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG9CQUE0QixFQUFFLHFCQUE2Qjs7Y0FDN0csU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsU0FBUyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ3RELFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7UUFFbkUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBelBGLFVBQVU7Ozs7NENBRUksTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7SUFBYiwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJpY2hpZXN0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaWNoaWVzdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgVXRlbnRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS91dGVudGUvdXRlbnRlJztcbmltcG9ydCB7IEV2ZW50byB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvZXZlbnRvL2V2ZW50byc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS9mZWVkL2ZlZWQnO1xuaW1wb3J0IHsgVmlubyB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvdmluby92aW5vJztcbmltcG9ydCB7IFByb3ZpbmNpYSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvcHJvdmluY2lhL3Byb3ZpbmNpYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL25vdGlmaWNhL3JpY2hpZXN0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhQ29ubmVjdEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2Nvbm5lY3QvcmljaGllc3RhY29ubmVjdGdlbmVyaWNhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJpY2hpZXN0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogYW55KSB7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tIEdFVCAtLS0tLS0tLVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50aUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VXRlbnRpQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRVdGVudGlBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50ZShpZFV0ZW50ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50ZUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSBpZFV0ZW50ZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0QXppZW5kZSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QXppZW5kZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0QXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRCYWRnZXMoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEJhZGdlc0Z1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRpKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudGlGdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSAnJztcbiAgICByaWNoaWVzdGEuZWxlbmNvQ29tcGxldG8gPSAnUyc7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50aUF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRpQXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gJyc7XG4gICAgcmljaGllc3RhLmVsZW5jb0NvbXBsZXRvID0gJ1MnO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudG9VdGVudGUoaWRFdmVudG86IHN0cmluZywgZGF0YUV2ZW50bzogbnVtYmVyLCBpZFV0ZW50ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50b0Z1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5kYXRhRXZlbnRvID0gZGF0YUV2ZW50bztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRvKGlkRXZlbnRvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRvRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0UHJvdmluY2llKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRQcm92aW5jaWVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEZlZWQoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEZlZWRGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEZlZWRBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEZlZWRBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbmkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbmlGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbm8oaWRWaW5vOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0Vmlub0Z1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZFZpbm8gPSBpZFZpbm87XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbmlBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VmluaUF6aWVuZGFGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFByb2ZpbG9BemllbmRhKGlkUHJvZmlsb0F6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5pZFByb2ZpbG9BemllbmRhID0gaWRQcm9maWxvQXppZW5kYTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0UHJvZmlsb0F6aWVuZGFGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0gUFVUIC0tLS0tLS0tXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEltbWFnaW5lKGZpbGU6IGFueSwgZmlsZW5hbWU6IHN0cmluZywgdGlwb0VudGl0YTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG5cbiAgICByaWNoaWVzdGEuYmFzZTY0SW1hZ2UgPSBmaWxlO1xuICAgIHJpY2hpZXN0YS5maWxlbmFtZSA9IGZpbGVuYW1lO1xuICAgIHJpY2hpZXN0YS50aXBvRW50aXRhID0gdGlwb0VudGl0YTtcblxuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRJbW1hZ2luaUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0UHJvdmluY2lhKHByb3ZpbmNpYTogUHJvdmluY2lhKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFByb3ZpbmNpYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEucHJvdmluY2lhID0gcHJvdmluY2lhO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0VXRlbnRlKHV0ZW50ZTogVXRlbnRlKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFV0ZW50ZUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEudXRlbnRlID0gdXRlbnRlO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0RXZlbnRvKGV2ZW50bzogRXZlbnRvKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEV2ZW50b0Z1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuZXZlbnRvID0gZXZlbnRvO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0RmVlZChmZWVkOiBGZWVkKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEZlZWRGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmZlZWQgPSBmZWVkO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRWaW5vKHZpbm86IFZpbm8pIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0Vmlub0Z1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEudmlubyA9IHZpbm87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIE5PVElGSUNBVElPTiAtLS0tLS0tLVxuICBwdWJsaWMgZ2V0UmljaGllc3RhTm90aWZpY2EobWVzc2FnZ2lvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5tZXNzYWdnaW8gPSBtZXNzYWdnaW87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIENPTk5FQ1QgLS0tLS0tLS1cbiAgcHVibGljIGdldFJpY2hpZXN0YUFnZ2l1bmdpRXZlbnRvQVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdQJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhQWNxdWlzdGFFdmVudG8oXG4gICAgaWRVdGVudGU6IHN0cmluZywgaWRFdmVudG86IHN0cmluZywgZGF0YUV2ZW50bzogbnVtYmVyLCBzdGF0b1ByZWZlcml0b0V2ZW50bzogbnVtYmVyLCBzdGF0b0FjcXVpc3RhdG9FdmVudG86IG51bWJlcikge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5kYXRhRXZlbnRvID0gZGF0YUV2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9FdmVudG8gPSAnQSc7XG4gICAgcmljaGllc3RhLnN0YXRvUHJlZmVyaXRvRXZlbnRvID0gc3RhdG9QcmVmZXJpdG9FdmVudG87XG4gICAgcmljaGllc3RhLnN0YXRvQWNxdWlzdGF0b0V2ZW50byA9IHN0YXRvQWNxdWlzdGF0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuY29ubmVjdEV2ZW50b0FVdGVudGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVJpbXVvdmlFdmVudG9EYVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdEJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cbn1cbiJdfQ==