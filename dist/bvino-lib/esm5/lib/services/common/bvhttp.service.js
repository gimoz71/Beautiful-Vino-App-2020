/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
var BVHttpService = /** @class */ (function () {
    function BVHttpService(http, backEnd, env) {
        this.http = http;
        this.backEnd = backEnd;
        this.env = env;
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.post = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlGet
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postPut = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlPut
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postNotifica = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlNotifica
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postConnect = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlConnect
            + this.env.pathSeparator
            + path, request);
    };
    BVHttpService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVHttpService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpBackend },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return BVHttpService;
}());
export { BVHttpService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BVHttpService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    BVHttpService.prototype.backEnd;
    /**
     * @type {?}
     * @private
     */
    BVHttpService.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2J2aHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYy9EO0lBR0UsdUJBQ1UsSUFBZ0IsRUFDaEIsT0FBb0IsRUFDTCxHQUFRO1FBRnZCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNMLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDakMsQ0FBQzs7Ozs7O0lBRU0sNEJBQUk7Ozs7O0lBQVgsVUFBWSxJQUFZLEVBQUUsT0FBNkI7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sK0JBQU87Ozs7O0lBQWQsVUFBZSxJQUFZLEVBQUUsT0FBNkI7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sb0NBQVk7Ozs7O0lBQW5CLFVBQW9CLElBQVksRUFBRSxPQUFrQztRQUNsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtjQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7Y0FDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLG1DQUFXOzs7OztJQUFsQixVQUFtQixJQUFZLEVBQUUsT0FBaUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7Y0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQixDQUFDOztnQkFuQ0YsVUFBVTs7OztnQkFkRixVQUFVO2dCQUFFLFdBQVc7Z0RBb0IzQixNQUFNLFNBQUMsS0FBSzs7SUErQmpCLG9CQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FwQ1ksYUFBYTs7Ozs7O0lBR3RCLDZCQUF3Qjs7Ozs7SUFDeEIsZ0NBQTRCOzs7OztJQUM1Qiw0QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJpc3Bvc3RhR2V0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvZ2V0L3Jpc3Bvc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhR2V0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvZ2V0L3JpY2hpZXN0YWdldGdlbmVyaWNhJztcbmltcG9ydCB7IFJpc3Bvc3RhUHV0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvcHV0L3Jpc3Bvc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhUHV0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvcHV0L3JpY2hpZXN0YXB1dGdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmljaGllc3Rhbm90aWZpY2FnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmlzcG9zdGFub3RpZmljYWdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9jb25uZWN0L3JpY2hpZXN0YWNvbm5lY3RnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YUNvbm5lY3RHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9jb25uZWN0L3Jpc3Bvc3RhY29ubmVjdGdlbmVyaWNhJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQlZIdHRwU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgYmFja0VuZDogSHR0cEJhY2tlbmQsXG4gICAgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IGFueSkge1xuICB9XG5cbiAgcHVibGljIHBvc3QocGF0aDogc3RyaW5nLCByZXF1ZXN0OiBSaWNoaWVzdGFHZXRHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFHZXRHZW5lcmljYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSaXNwb3N0YUdldEdlbmVyaWNhPihcbiAgICAgIHRoaXMuZW52LmJhc2VBcHBVcmxHZXRcbiAgICAgICsgdGhpcy5lbnYucGF0aFNlcGFyYXRvclxuICAgICAgKyBwYXRoLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0UHV0KHBhdGg6IHN0cmluZywgcmVxdWVzdDogUmljaGllc3RhUHV0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhUHV0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmlzcG9zdGFQdXRHZW5lcmljYT4oXG4gICAgICB0aGlzLmVudi5iYXNlQXBwVXJsUHV0XG4gICAgICArIHRoaXMuZW52LnBhdGhTZXBhcmF0b3JcbiAgICAgICsgcGF0aCwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgcG9zdE5vdGlmaWNhKHBhdGg6IHN0cmluZywgcmVxdWVzdDogUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFOb3RpZmljYUdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYT4oXG4gICAgICB0aGlzLmVudi5iYXNlQXBwVXJsTm90aWZpY2FcbiAgICAgICsgdGhpcy5lbnYucGF0aFNlcGFyYXRvclxuICAgICAgKyBwYXRoLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0Q29ubmVjdChwYXRoOiBzdHJpbmcsIHJlcXVlc3Q6IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFDb25uZWN0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmlzcG9zdGFDb25uZWN0R2VuZXJpY2E+KFxuICAgICAgdGhpcy5lbnYuYmFzZUFwcFVybENvbm5lY3RcbiAgICAgICsgdGhpcy5lbnYucGF0aFNlcGFyYXRvclxuICAgICAgKyBwYXRoLCByZXF1ZXN0KTtcbiAgfVxuXG59XG4iXX0=