/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
import { RichiestaConnectGenerica } from '../../models/comunicazioni/richieste/connect/richiestaconnectgenerica';
var RichiesteService = /** @class */ (function () {
    function RichiesteService(env) {
        this.env = env;
    }
    // -------- GET --------
    // -------- GET --------
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtenti = 
    // -------- GET --------
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtentiAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtente = /**
     * @param {?} idUtente
     * @return {?}
     */
    function (idUtente) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtenteFunctionName;
        richiesta.idUtente = idUtente;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetAziende = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendeFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetBadges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getBadgesFunctionName;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventi = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiFunctionName;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventiAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    };
    /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventoUtente = /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    function (idEvento, dataEvento, idUtente) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        richiesta.idUtente = idUtente;
        richiesta.dataEvento = dataEvento;
        return richiesta;
    };
    /**
     * @param {?} idEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEvento = /**
     * @param {?} idEvento
     * @return {?}
     */
    function (idEvento) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetProvincie = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getProvincieFunctionName;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetFeed = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetFeedAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetVini = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getViniFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idVino
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetVino = /**
     * @param {?} idVino
     * @return {?}
     */
    function (idVino) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getVinoFunctionName;
        richiesta.idVino = idVino;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetViniAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.idAzienda = idAzienda;
        richiesta.functionName = this.env.getViniAziendaFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetProfiloAzienda = /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    function (idProfiloAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.idProfiloAzienda = idProfiloAzienda;
        richiesta.functionName = this.env.getProfiloAziendaFunctionName;
        return richiesta;
    };
    // -------- PUT --------
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutImmagine = 
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    function (file, filename, tipoEntita) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.base64Image = file;
        richiesta.filename = filename;
        richiesta.tipoEntita = tipoEntita;
        richiesta.functionName = this.env.putImmaginiFunctionName;
        return richiesta;
    };
    /**
     * @param {?} provincia
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutProvincia = /**
     * @param {?} provincia
     * @return {?}
     */
    function (provincia) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putProvinciaFunctionName;
        richiesta.provincia = provincia;
        return richiesta;
    };
    /**
     * @param {?} utente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutUtente = /**
     * @param {?} utente
     * @return {?}
     */
    function (utente) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUtenteFunctionName;
        richiesta.utente = utente;
        return richiesta;
    };
    /**
     * @param {?} evento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutEvento = /**
     * @param {?} evento
     * @return {?}
     */
    function (evento) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putEventoFunctionName;
        richiesta.evento = evento;
        return richiesta;
    };
    /**
     * @param {?} feed
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutFeed = /**
     * @param {?} feed
     * @return {?}
     */
    function (feed) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putFeedFunctionName;
        richiesta.feed = feed;
        return richiesta;
    };
    /**
     * @param {?} vino
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutVino = /**
     * @param {?} vino
     * @return {?}
     */
    function (vino) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putVinoFunctionName;
        richiesta.vino = vino;
        return richiesta;
    };
    /**
     * @param {?} utente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutuserProfileWithImage = /**
     * @param {?} utente
     * @return {?}
     */
    function (utente) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUserProfileImageWithUserFunctionName;
        richiesta.utente = utente;
        return richiesta;
    };
    // -------- NOTIFICATION --------
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaNotifica = 
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    function (messaggio) {
        /** @type {?} */
        var richiesta = new RichiestaNotificaGenerica();
        richiesta.messaggio = messaggio;
        return richiesta;
    };
    // -------- CONNECT --------
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAggiungiEventoAPreferiti = 
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'P';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAcquistaEvento = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'A';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaRimuoviEventoDaPreferiti = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'D';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    RichiesteService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RichiesteService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return RichiesteService;
}());
export { RichiesteService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RichiesteService.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUVqSDtJQUVFLDBCQUFtQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUUzQyxDQUFDO0lBRUQsd0JBQXdCOzs7OztJQUVqQixnREFBcUI7Ozs7O0lBQTVCOztZQUNRLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV4RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHVEQUE0Qjs7OztJQUFuQyxVQUFvQyxTQUFpQjs7WUFDN0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQXFCOzs7O0lBQTVCLFVBQTZCLFFBQWdCOztZQUNyQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFH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QUFFLG9CQUE0QixFQUFFLHFCQUE2Qjs7WUFDN0csU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsU0FBUyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ3RELFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7UUFFbkUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBaFFGLFVBQVU7Ozs7Z0RBRUksTUFBTSxTQUFDLEtBQUs7O0lBK1AzQix1QkFBQztDQUFBLEFBalFELElBaVFDO1NBaFFZLGdCQUFnQjs7Ozs7O0lBQ2YsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmljaGllc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhUHV0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvcHV0L3JpY2hpZXN0YXB1dGdlbmVyaWNhJztcbmltcG9ydCB7IFV0ZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvdXRlbnRlL3V0ZW50ZSc7XG5pbXBvcnQgeyBFdmVudG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL2V2ZW50by9ldmVudG8nO1xuaW1wb3J0IHsgRmVlZCB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvZmVlZC9mZWVkJztcbmltcG9ydCB7IFZpbm8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL3Zpbm8vdmlubyc7XG5pbXBvcnQgeyBQcm92aW5jaWEgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL3Byb3ZpbmNpYS9wcm92aW5jaWEnO1xuaW1wb3J0IHsgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaWNoaWVzdGFub3RpZmljYWdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9jb25uZWN0L3JpY2hpZXN0YWNvbm5lY3RnZW5lcmljYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSaWNoaWVzdGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IGFueSkge1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLSBHRVQgLS0tLS0tLS1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VXRlbnRpKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRVdGVudGlGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50aUF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRpQXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGUoaWRVdGVudGU6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRVdGVudGVGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEF6aWVuZGUoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEF6aWVuZGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0QmFkZ2VzKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRCYWRnZXNGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50aSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRpRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gJyc7XG4gICAgcmljaGllc3RhLmVsZW5jb0NvbXBsZXRvID0gJ1MnO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudGlBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50aUF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9ICcnO1xuICAgIHJpY2hpZXN0YS5lbGVuY29Db21wbGV0byA9ICdTJztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRvVXRlbnRlKGlkRXZlbnRvOiBzdHJpbmcsIGRhdGFFdmVudG86IG51bWJlciwgaWRVdGVudGU6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudG9GdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRFdmVudG8gPSBpZEV2ZW50bztcbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSBpZFV0ZW50ZTtcbiAgICByaWNoaWVzdGEuZGF0YUV2ZW50byA9IGRhdGFFdmVudG87XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50byhpZEV2ZW50bzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50b0Z1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFByb3ZpbmNpZSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0UHJvdmluY2llRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRGZWVkKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRGZWVkRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRGZWVkQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRGZWVkQXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5pKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5pRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5vKGlkVmlubzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbm9GdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRWaW5vID0gaWRWaW5vO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5pQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbmlBemllbmRhRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRQcm9maWxvQXppZW5kYShpZFByb2ZpbG9BemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuaWRQcm9maWxvQXppZW5kYSA9IGlkUHJvZmlsb0F6aWVuZGE7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFByb2ZpbG9BemllbmRhRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIFBVVCAtLS0tLS0tLVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRJbW1hZ2luZShmaWxlOiBhbnksIGZpbGVuYW1lOiBzdHJpbmcsIHRpcG9FbnRpdGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmJhc2U2NEltYWdlID0gZmlsZTtcbiAgICByaWNoaWVzdGEuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbiAgICByaWNoaWVzdGEudGlwb0VudGl0YSA9IHRpcG9FbnRpdGE7XG5cbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0SW1tYWdpbmlGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFByb3ZpbmNpYShwcm92aW5jaWE6IFByb3ZpbmNpYSkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRQcm92aW5jaWFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnByb3ZpbmNpYSA9IHByb3ZpbmNpYTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFV0ZW50ZSh1dGVudGU6IFV0ZW50ZSkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRVdGVudGVGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnV0ZW50ZSA9IHV0ZW50ZTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEV2ZW50byhldmVudG86IEV2ZW50bykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRFdmVudG9GdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmV2ZW50byA9IGV2ZW50bztcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEZlZWQoZmVlZDogRmVlZCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRGZWVkRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5mZWVkID0gZmVlZDtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0Vmlubyh2aW5vOiBWaW5vKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFZpbm9GdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnZpbm8gPSB2aW5vO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0dXNlclByb2ZpbGVXaXRoSW1hZ2UodXRlbnRlOiBVdGVudGUpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0VXNlclByb2ZpbGVJbWFnZVdpdGhVc2VyRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS51dGVudGUgPSB1dGVudGU7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIE5PVElGSUNBVElPTiAtLS0tLS0tLVxuICBwdWJsaWMgZ2V0UmljaGllc3RhTm90aWZpY2EobWVzc2FnZ2lvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5tZXNzYWdnaW8gPSBtZXNzYWdnaW87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIENPTk5FQ1QgLS0tLS0tLS1cbiAgcHVibGljIGdldFJpY2hpZXN0YUFnZ2l1bmdpRXZlbnRvQVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdQJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhQWNxdWlzdGFFdmVudG8oXG4gICAgaWRVdGVudGU6IHN0cmluZywgaWRFdmVudG86IHN0cmluZywgZGF0YUV2ZW50bzogbnVtYmVyLCBzdGF0b1ByZWZlcml0b0V2ZW50bzogbnVtYmVyLCBzdGF0b0FjcXVpc3RhdG9FdmVudG86IG51bWJlcikge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5kYXRhRXZlbnRvID0gZGF0YUV2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9FdmVudG8gPSAnQSc7XG4gICAgcmljaGllc3RhLnN0YXRvUHJlZmVyaXRvRXZlbnRvID0gc3RhdG9QcmVmZXJpdG9FdmVudG87XG4gICAgcmljaGllc3RhLnN0YXRvQWNxdWlzdGF0b0V2ZW50byA9IHN0YXRvQWNxdWlzdGF0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuY29ubmVjdEV2ZW50b0FVdGVudGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVJpbXVvdmlFdmVudG9EYVByZWZlcml0aShcbiAgICBpZFV0ZW50ZTogc3RyaW5nLCBpZEV2ZW50bzogc3RyaW5nLCBkYXRhRXZlbnRvOiBudW1iZXIsIHN0YXRvUHJlZmVyaXRvRXZlbnRvOiBudW1iZXIsIHN0YXRvQWNxdWlzdGF0b0V2ZW50bzogbnVtYmVyKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG4gICAgcmljaGllc3RhLmRhdGFFdmVudG8gPSBkYXRhRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdEJztcbiAgICByaWNoaWVzdGEuc3RhdG9QcmVmZXJpdG9FdmVudG8gPSBzdGF0b1ByZWZlcml0b0V2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9BY3F1aXN0YXRvRXZlbnRvID0gc3RhdG9BY3F1aXN0YXRvRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5jb25uZWN0RXZlbnRvQVV0ZW50ZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cbn1cbiJdfQ==