/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUVwSDtJQUVFLDBCQUFtQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUUzQyxDQUFDO0lBRUQsd0JBQXdCOzs7OztJQUVqQixnREFBcUI7Ozs7O0lBQTVCOztZQUNRLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV4RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHVEQUE0Qjs7OztJQUFuQyxVQUFvQyxTQUFpQjs7WUFDN0MsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQXFCOzs7O0lBQTVCLFVBQTZCLFFBQWdCOztZQUNyQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFDeEQsU0FBUyxD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UyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBaUM7Ozs7OztJQUMxQiwrQ0FBb0I7Ozs7OztJQUEzQixVQUE0QixTQUFpQjs7WUFDckMsU0FBUyxHQUFHLElBQUkseUJBQXlCLEVBQUU7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBaE1GLFVBQVU7Ozs7Z0RBRUksTUFBTSxTQUFDLEtBQUs7O0lBK0wzQix1QkFBQztDQUFBLEFBak1ELElBaU1DO1NBaE1ZLGdCQUFnQjs7Ozs7O0lBQ2YsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmljaGllc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhUHV0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvcHV0L3JpY2hpZXN0YXB1dGdlbmVyaWNhJztcbmltcG9ydCB7IFV0ZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvdXRlbnRlL3V0ZW50ZSc7XG5pbXBvcnQgeyBFdmVudG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL2V2ZW50by9ldmVudG8nO1xuaW1wb3J0IHsgRmVlZCB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvZmVlZC9mZWVkJztcbmltcG9ydCB7IFZpbm8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL3Zpbm8vdmlubyc7XG5pbXBvcnQgeyBQcm92aW5jaWEgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXRhL3Byb3ZpbmNpYS9wcm92aW5jaWEnO1xuaW1wb3J0IHsgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaWNoaWVzdGFub3RpZmljYWdlbmVyaWNhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJpY2hpZXN0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogYW55KSB7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tIEdFVCAtLS0tLS0tLVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50aUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VXRlbnRpQXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRVdGVudGlBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50ZShpZFV0ZW50ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFV0ZW50ZUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSBpZFV0ZW50ZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0QXppZW5kZSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QXppZW5kZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0QXppZW5kYShpZEF6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRBemllbmRhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5pZEF6aWVuZGEgPSBpZEF6aWVuZGE7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRCYWRnZXMoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEJhZGdlc0Z1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRpKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudGlGdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRVdGVudGUgPSAnJztcbiAgICByaWNoaWVzdGEuZWxlbmNvQ29tcGxldG8gPSAnUyc7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEV2ZW50aUF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRpQXppZW5kYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuXG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gJyc7XG4gICAgcmljaGllc3RhLmVsZW5jb0NvbXBsZXRvID0gJ1MnO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudG8oaWRFdmVudG86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRFdmVudG9GdW5jdGlvbk5hbWU7XG5cbiAgICByaWNoaWVzdGEuaWRFdmVudG8gPSBpZEV2ZW50bztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRQcm92aW5jaWUoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFByb3ZpbmNpZUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RmVlZCgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RmVlZEZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RmVlZEF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RmVlZEF6aWVuZGFGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmluaSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VmluaUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmlubyhpZFZpbm86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5vRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkVmlubyA9IGlkVmlubztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0VmluaUF6aWVuZGEoaWRBemllbmRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuaWRBemllbmRhID0gaWRBemllbmRhO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRWaW5pQXppZW5kYUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0UHJvZmlsb0F6aWVuZGEoaWRQcm9maWxvQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmlkUHJvZmlsb0F6aWVuZGEgPSBpZFByb2ZpbG9BemllbmRhO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRQcm9maWxvQXppZW5kYUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICAvLyAtLS0tLS0tLSBQVVQgLS0tLS0tLS1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0SW1tYWdpbmUoZmlsZTogYW55LCBmaWxlbmFtZTogc3RyaW5nLCB0aXBvRW50aXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcblxuICAgIHJpY2hpZXN0YS5iYXNlNjRJbWFnZSA9IGZpbGU7XG4gICAgcmljaGllc3RhLmZpbGVuYW1lID0gZmlsZW5hbWU7XG4gICAgcmljaGllc3RhLnRpcG9FbnRpdGEgPSB0aXBvRW50aXRhO1xuXG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEltbWFnaW5pRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRQcm92aW5jaWEocHJvdmluY2lhOiBQcm92aW5jaWEpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0UHJvdmluY2lhRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5wcm92aW5jaWEgPSBwcm92aW5jaWE7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRVdGVudGUodXRlbnRlOiBVdGVudGUpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0VXRlbnRlRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS51dGVudGUgPSB1dGVudGU7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRFdmVudG8oZXZlbnRvOiBFdmVudG8pIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0RXZlbnRvRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS5ldmVudG8gPSBldmVudG87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRGZWVkKGZlZWQ6IEZlZWQpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0RmVlZEZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuZmVlZCA9IGZlZWQ7XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dFZpbm8odmlubzogVmlubykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFQdXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRWaW5vRnVuY3Rpb25OYW1lO1xuICAgIHJpY2hpZXN0YS52aW5vID0gdmlubztcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0gTk9USUZJQ0FUSU9OIC0tLS0tLS0tXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFOb3RpZmljYShtZXNzYWdnaW86IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLm1lc3NhZ2dpbyA9IG1lc3NhZ2dpbztcbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG59XG4iXX0=