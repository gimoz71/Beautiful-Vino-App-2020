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
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAggiungiEventoAPreferiti = 
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @return {?}
     */
    function (idUtente, idEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.statoEvento = 'P';
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAcquistaEvento = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @return {?}
     */
    function (idUtente, idEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.statoEvento = 'A';
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaRimuoviEventoDaPreferiti = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @return {?}
     */
    function (idUtente, idEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.statoEvento = 'D';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUVqSDtJQUVFLDBCQUFtQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUUzQyxDQUFDO0lBRUQsd0JBQXdCOzs7OztJQUVqQixnREFBcUI7Ozs7O0lBQTVCOztZQUNRLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV4RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHVEQUE0Qjs7OztJQUFuQyxVQUFvQyxTQUFpQjs7WUFDN0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQXFCOzs7O0lBQTVCLFVBQTZCLFFBQWdCOztZQUNyQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFH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RW5FLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVNLCtEQUFvQzs7Ozs7SUFBM0MsVUFBNEMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDdEUsU0FBUyxHQUFHLElBQUksd0JBQXdCLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO1FBRW5FLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O2dCQWxPRixVQUFVOzs7O2dEQUVJLE1BQU0sU0FBQyxLQUFLOztJQWlPM0IsdUJBQUM7Q0FBQSxBQW5PRCxJQW1PQztTQWxPWSxnQkFBZ0I7Ozs7OztJQUNmLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmljaGllc3RhR2V0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvZ2V0L3JpY2hpZXN0YWdldGdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YVB1dEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL3B1dC9yaWNoaWVzdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBVdGVudGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL3V0ZW50ZS91dGVudGUnO1xuaW1wb3J0IHsgRXZlbnRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS9ldmVudG8vZXZlbnRvJztcbmltcG9ydCB7IEZlZWQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL2ZlZWQvZmVlZCc7XG5pbXBvcnQgeyBWaW5vIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS92aW5vL3Zpbm8nO1xuaW1wb3J0IHsgUHJvdmluY2lhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS9wcm92aW5jaWEvcHJvdmluY2lhJztcbmltcG9ydCB7IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmljaGllc3Rhbm90aWZpY2FnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvY29ubmVjdC9yaWNoaWVzdGFjb25uZWN0Z2VuZXJpY2EnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmljaGllc3RlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnkpIHtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0gR0VUIC0tLS0tLS0tXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50aSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRpRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGlBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50aUF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VXRlbnRlKGlkVXRlbnRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRlRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRBemllbmRlKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRBemllbmRlRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEJhZGdlcygpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QmFkZ2VzRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudGkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50aUZ1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9ICcnO1xuICAgIHJpY2hpZXN0YS5lbGVuY29Db21wbGV0byA9ICdTJztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRpQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudGlBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG5cbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSAnJztcbiAgICByaWNoaWVzdGEuZWxlbmNvQ29tcGxldG8gPSAnUyc7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50byhpZEV2ZW50bzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50b0Z1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFByb3ZpbmNpZSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0UHJvdmluY2llRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRGZWVkKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRGZWVkRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRGZWVkQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRGZWVkQXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5pKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5pRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5vKGlkVmlubzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbm9GdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRWaW5vID0gaWRWaW5vO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRWaW5pQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbmlBemllbmRhRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRQcm9maWxvQXppZW5kYShpZFByb2ZpbG9BemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuaWRQcm9maWxvQXppZW5kYSA9IGlkUHJvZmlsb0F6aWVuZGE7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFByb2ZpbG9BemllbmRhRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIFBVVCAtLS0tLS0tLVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRJbW1hZ2luZShmaWxlOiBhbnksIGZpbGVuYW1lOiBzdHJpbmcsIHRpcG9FbnRpdGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuXG4gICAgcmljaGllc3RhLmJhc2U2NEltYWdlID0gZmlsZTtcbiAgICByaWNoaWVzdGEuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbiAgICByaWNoaWVzdGEudGlwb0VudGl0YSA9IHRpcG9FbnRpdGE7XG5cbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0SW1tYWdpbmlGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFByb3ZpbmNpYShwcm92aW5jaWE6IFByb3ZpbmNpYSkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRQcm92aW5jaWFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnByb3ZpbmNpYSA9IHByb3ZpbmNpYTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFV0ZW50ZSh1dGVudGU6IFV0ZW50ZSkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRVdGVudGVGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnV0ZW50ZSA9IHV0ZW50ZTtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEV2ZW50byhldmVudG86IEV2ZW50bykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRFdmVudG9GdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmV2ZW50byA9IGV2ZW50bztcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEZlZWQoZmVlZDogRmVlZCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRGZWVkRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5mZWVkID0gZmVlZDtcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0Vmlubyh2aW5vOiBWaW5vKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFZpbm9GdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLnZpbm8gPSB2aW5vO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICAvLyAtLS0tLS0tLSBOT1RJRklDQVRJT04gLS0tLS0tLS1cbiAgcHVibGljIGdldFJpY2hpZXN0YU5vdGlmaWNhKG1lc3NhZ2dpbzogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEubWVzc2FnZ2lvID0gbWVzc2FnZ2lvO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICAvLyAtLS0tLS0tLSBDT05ORUNUIC0tLS0tLS0tXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFBZ2dpdW5naUV2ZW50b0FQcmVmZXJpdGkoaWRVdGVudGU6IHN0cmluZywgaWRFdmVudG86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdQJztcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuY29ubmVjdEV2ZW50b0FVdGVudGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUFjcXVpc3RhRXZlbnRvKGlkVXRlbnRlOiBzdHJpbmcsIGlkRXZlbnRvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhQ29ubmVjdEdlbmVyaWNhKCk7XG5cbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSBpZFV0ZW50ZTtcbiAgICByaWNoaWVzdGEuaWRFdmVudG8gPSBpZEV2ZW50bztcbiAgICByaWNoaWVzdGEuc3RhdG9FdmVudG8gPSAnQSc7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmNvbm5lY3RFdmVudG9BVXRlbnRlRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFSaW11b3ZpRXZlbnRvRGFQcmVmZXJpdGkoaWRVdGVudGU6IHN0cmluZywgaWRFdmVudG86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9IGlkVXRlbnRlO1xuICAgIHJpY2hpZXN0YS5pZEV2ZW50byA9IGlkRXZlbnRvO1xuICAgIHJpY2hpZXN0YS5zdGF0b0V2ZW50byA9ICdEJztcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuY29ubmVjdEV2ZW50b0FVdGVudGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG59XG4iXX0=