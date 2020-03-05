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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2J2aHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBWS9EO0lBR0UsdUJBQ1UsSUFBZ0IsRUFDaEIsT0FBb0IsRUFDTCxHQUFRO1FBRnZCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNMLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDakMsQ0FBQzs7Ozs7O0lBRU0sNEJBQUk7Ozs7O0lBQVgsVUFBWSxJQUFZLEVBQUUsT0FBNkI7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sK0JBQU87Ozs7O0lBQWQsVUFBZSxJQUFZLEVBQUUsT0FBNkI7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sb0NBQVk7Ozs7O0lBQW5CLFVBQW9CLElBQVksRUFBRSxPQUFrQztRQUNsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtjQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7Y0FDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O2dCQTVCRixVQUFVOzs7O2dCQVpGLFVBQVU7Z0JBQUUsV0FBVztnREFrQjNCLE1BQU0sU0FBQyxLQUFLOztJQXdCakIsb0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxhQUFhOzs7Ozs7SUFHdEIsNkJBQXdCOzs7OztJQUN4QixnQ0FBNEI7Ozs7O0lBQzVCLDRCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmlzcG9zdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmlzcG9zdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmljaGllc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmlzcG9zdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmlzcG9zdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaWNoaWVzdGFub3RpZmljYWdlbmVyaWNhJztcbmltcG9ydCB7IFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaXNwb3N0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCVkh0dHBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBiYWNrRW5kOiBIdHRwQmFja2VuZCxcbiAgICBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogYW55KSB7XG4gIH1cblxuICBwdWJsaWMgcG9zdChwYXRoOiBzdHJpbmcsIHJlcXVlc3Q6IFJpY2hpZXN0YUdldEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YUdldEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJpc3Bvc3RhR2V0R2VuZXJpY2E+KFxuICAgICAgdGhpcy5lbnYuYmFzZUFwcFVybEdldFxuICAgICAgKyB0aGlzLmVudi5wYXRoU2VwYXJhdG9yXG4gICAgICArIHBhdGgsIHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIHBvc3RQdXQocGF0aDogc3RyaW5nLCByZXF1ZXN0OiBSaWNoaWVzdGFQdXRHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFQdXRHZW5lcmljYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSaXNwb3N0YVB1dEdlbmVyaWNhPihcbiAgICAgIHRoaXMuZW52LmJhc2VBcHBVcmxQdXRcbiAgICAgICsgdGhpcy5lbnYucGF0aFNlcGFyYXRvclxuICAgICAgKyBwYXRoLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0Tm90aWZpY2EocGF0aDogc3RyaW5nLCByZXF1ZXN0OiBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YU5vdGlmaWNhR2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmlzcG9zdGFOb3RpZmljYUdlbmVyaWNhPihcbiAgICAgIHRoaXMuZW52LmJhc2VBcHBVcmxOb3RpZmljYVxuICAgICAgKyB0aGlzLmVudi5wYXRoU2VwYXJhdG9yXG4gICAgICArIHBhdGgsIHJlcXVlc3QpO1xuICB9XG5cbn1cbiJdfQ==