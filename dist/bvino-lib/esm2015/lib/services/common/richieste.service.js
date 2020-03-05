/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RichiestaGetGenerica } from '../../models/comunicazioni/richieste/get/richiestagetgenerica';
import { RichiestaPutGenerica } from '../../models/comunicazioni/richieste/put/richiestaputgenerica';
import { RichiestaNotificaGenerica } from '../../models/comunicazioni/richieste/notifica/richiestanotificagenerica';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaGllc3RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQU1yRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUdwSCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW1DLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBRTNDLENBQUM7Ozs7O0lBSU0scUJBQXFCOztjQUNwQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxRQUFnQjs7Y0FDckMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQ3hELFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTlCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTSxzQkFBc0I7O2NBQ3JCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztRQUV6RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0scUJBQXFCOztjQUNwQixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFFeEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLHFCQUFxQjs7Y0FDcEIsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBRXhELFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBRS9CLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0scUJBQXFCLENBQUMsUUFBZ0I7O2NBQ3JDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV4RCxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUU5QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBR00sd0JBQXdCOztjQUN2QixTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7UUFFM0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLG1CQUFtQjs7Y0FDbEIsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFDNUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBRXRELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTSxtQkFBbUI7O2NBQ2xCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUV0RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLE1BQWM7O2NBQ2pDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUV0RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLDBCQUEwQixDQUFDLFNBQWlCOztjQUMzQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUM1QyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7UUFFN0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSw2QkFBNkIsQ0FBQyxnQkFBd0I7O2NBQ3JELFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7UUFFaEUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7SUFJTSx1QkFBdUIsQ0FBQyxJQUFTLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQjs7Y0FDdEUsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFFNUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbEMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1FBRTFELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sd0JBQXdCLENBQUMsU0FBb0I7O2NBQzVDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztRQUMzRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLE1BQWM7O2NBQ25DLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLE1BQWM7O2NBQ25DLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLElBQVU7O2NBQzdCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUdNLG1CQUFtQixDQUFDLElBQVU7O2NBQzdCLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBQzVDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFHTSxvQkFBb0IsQ0FBQyxTQUFpQjs7Y0FDckMsU0FBUyxHQUFHLElBQUkseUJBQXlCLEVBQUU7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBOUpGLFVBQVU7Ozs7NENBRUksTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7SUFBYiwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJpY2hpZXN0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaWNoaWVzdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgVXRlbnRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS91dGVudGUvdXRlbnRlJztcbmltcG9ydCB7IEV2ZW50byB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvZXZlbnRvL2V2ZW50byc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0YS9mZWVkL2ZlZWQnO1xuaW1wb3J0IHsgVmlubyB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvdmluby92aW5vJztcbmltcG9ydCB7IFByb3ZpbmNpYSB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdGEvcHJvdmluY2lhL3Byb3ZpbmNpYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL25vdGlmaWNhL3JpY2hpZXN0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmljaGllc3RlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnkpIHtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0gR0VUIC0tLS0tLS0tXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFV0ZW50aSgpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VXRlbnRpRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRVdGVudGUoaWRVdGVudGU6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRVdGVudGVGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmlkVXRlbnRlID0gaWRVdGVudGU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEF6aWVuZGUoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEF6aWVuZGVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEJhZGdlcygpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0QmFkZ2VzRnVuY3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFHZXRFdmVudGkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEV2ZW50aUZ1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZFV0ZW50ZSA9ICcnO1xuICAgIHJpY2hpZXN0YS5lbGVuY29Db21wbGV0byA9ICdTJztcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0RXZlbnRvKGlkRXZlbnRvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0RXZlbnRvRnVuY3Rpb25OYW1lO1xuXG4gICAgcmljaGllc3RhLmlkRXZlbnRvID0gaWRFdmVudG87XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhR2V0UHJvdmluY2llKCkge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5nZXRQcm92aW5jaWVGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldEZlZWQoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldEZlZWRGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbmkoKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LmdldFZpbmlGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbm8oaWRWaW5vOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhR2V0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0Vmlub0Z1bmN0aW9uTmFtZTtcblxuICAgIHJpY2hpZXN0YS5pZFZpbm8gPSBpZFZpbm87XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFZpbmlBemllbmRhKGlkQXppZW5kYTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YUdldEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmlkQXppZW5kYSA9IGlkQXppZW5kYTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0VmluaUF6aWVuZGFGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgcHVibGljIGdldFJpY2hpZXN0YUdldFByb2ZpbG9BemllbmRhKGlkUHJvZmlsb0F6aWVuZGE6IHN0cmluZykge1xuICAgIGNvbnN0IHJpY2hpZXN0YSA9IG5ldyBSaWNoaWVzdGFHZXRHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5pZFByb2ZpbG9BemllbmRhID0gaWRQcm9maWxvQXppZW5kYTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYuZ2V0UHJvZmlsb0F6aWVuZGFGdW5jdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gcmljaGllc3RhO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0gUFVUIC0tLS0tLS0tXG5cbiAgcHVibGljIGdldFJpY2hpZXN0YVB1dEltbWFnaW5lKGZpbGU6IGFueSwgZmlsZW5hbWU6IHN0cmluZywgdGlwb0VudGl0YTogc3RyaW5nKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG5cbiAgICByaWNoaWVzdGEuYmFzZTY0SW1hZ2UgPSBmaWxlO1xuICAgIHJpY2hpZXN0YS5maWxlbmFtZSA9IGZpbGVuYW1lO1xuICAgIHJpY2hpZXN0YS50aXBvRW50aXRhID0gdGlwb0VudGl0YTtcblxuICAgIHJpY2hpZXN0YS5mdW5jdGlvbk5hbWUgPSB0aGlzLmVudi5wdXRJbW1hZ2luaUZ1bmN0aW9uTmFtZTtcblxuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0UHJvdmluY2lhKHByb3ZpbmNpYTogUHJvdmluY2lhKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFByb3ZpbmNpYUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEucHJvdmluY2lhID0gcHJvdmluY2lhO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0VXRlbnRlKHV0ZW50ZTogVXRlbnRlKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dFV0ZW50ZUZ1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEudXRlbnRlID0gdXRlbnRlO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0RXZlbnRvKGV2ZW50bzogRXZlbnRvKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEV2ZW50b0Z1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEuZXZlbnRvID0gZXZlbnRvO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmljaGllc3RhUHV0RmVlZChmZWVkOiBGZWVkKSB7XG4gICAgY29uc3QgcmljaGllc3RhID0gbmV3IFJpY2hpZXN0YVB1dEdlbmVyaWNhKCk7XG4gICAgcmljaGllc3RhLmZ1bmN0aW9uTmFtZSA9IHRoaXMuZW52LnB1dEZlZWRGdW5jdGlvbk5hbWU7XG4gICAgcmljaGllc3RhLmZlZWQgPSBmZWVkO1xuICAgIHJldHVybiByaWNoaWVzdGE7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRSaWNoaWVzdGFQdXRWaW5vKHZpbm86IFZpbm8pIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhUHV0R2VuZXJpY2EoKTtcbiAgICByaWNoaWVzdGEuZnVuY3Rpb25OYW1lID0gdGhpcy5lbnYucHV0Vmlub0Z1bmN0aW9uTmFtZTtcbiAgICByaWNoaWVzdGEudmlubyA9IHZpbm87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tIE5PVElGSUNBVElPTiAtLS0tLS0tLVxuICBwdWJsaWMgZ2V0UmljaGllc3RhTm90aWZpY2EobWVzc2FnZ2lvOiBzdHJpbmcpIHtcbiAgICBjb25zdCByaWNoaWVzdGEgPSBuZXcgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSgpO1xuICAgIHJpY2hpZXN0YS5tZXNzYWdnaW8gPSBtZXNzYWdnaW87XG4gICAgcmV0dXJuIHJpY2hpZXN0YTtcbiAgfVxufVxuIl19