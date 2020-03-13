/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BVHttpService } from './bvhttp.service';
import { Injectable, Inject } from '@angular/core';
var BVCommonService = /** @class */ (function () {
    function BVCommonService(httpService, env) {
        this.httpService = httpService;
        this.env = env;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.putNotifica = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postNotifica(this.env.notificationServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.put = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postPut(this.env.putServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.get = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.post(this.env.getServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.connect = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postConnect(this.env.connectServiceName, request);
    };
    BVCommonService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVCommonService.ctorParameters = function () { return [
        { type: BVHttpService },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return BVCommonService;
}());
export { BVCommonService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BVCommonService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    BVCommonService.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbkQ7SUFHRSx5QkFDVSxXQUEwQixFQUNYLEdBQVE7UUFEdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDWCxRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzdCLENBQUM7Ozs7O0lBRUUscUNBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBa0M7UUFDbkQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRU0sNkJBQUc7Ozs7SUFBVixVQUFXLE9BQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFTSw2QkFBRzs7OztJQUFWLFVBQVcsT0FBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVNLGlDQUFPOzs7O0lBQWQsVUFBZSxPQUFpQztRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBVEYsYUFBYTtnREFjakIsTUFBTSxTQUFDLEtBQUs7O0lBa0JqQixzQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGVBQWU7Ozs7OztJQUd4QixzQ0FBa0M7Ozs7O0lBQ2xDLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpY2hpZXN0YVB1dEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL3B1dC9yaWNoaWVzdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSaXNwb3N0YVB1dEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL3B1dC9yaXNwb3N0YXB1dGdlbmVyaWNhJztcbmltcG9ydCB7IEJWSHR0cFNlcnZpY2UgfSBmcm9tICcuL2J2aHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IFJpY2hpZXN0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaWNoaWVzdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaXNwb3N0YWdldGdlbmVyaWNhJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaWNoaWVzdGFub3RpZmljYWdlbmVyaWNhJztcbmltcG9ydCB7IFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9ub3RpZmljYS9yaXNwb3N0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuaW1wb3J0IHsgUmljaGllc3RhQ29ubmVjdEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2Nvbm5lY3QvcmljaGllc3RhY29ubmVjdGdlbmVyaWNhJztcbmltcG9ydCB7IFJpc3Bvc3RhQ29ubmVjdEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2Nvbm5lY3QvcmlzcG9zdGFjb25uZWN0Z2VuZXJpY2EnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQlZDb21tb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCVkh0dHBTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnlcbiAgKSB7IH1cblxuICBwdWJsaWMgcHV0Tm90aWZpY2EocmVxdWVzdDogUmljaGllc3RhTm90aWZpY2FHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFOb3RpZmljYUdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdE5vdGlmaWNhKHRoaXMuZW52Lm5vdGlmaWNhdGlvblNlcnZpY2VOYW1lLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBwdXQocmVxdWVzdDogUmljaGllc3RhUHV0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhUHV0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0UHV0KHRoaXMuZW52LnB1dFNlcnZpY2VOYW1lLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocmVxdWVzdDogUmljaGllc3RhR2V0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhR2V0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KHRoaXMuZW52LmdldFNlcnZpY2VOYW1lLCByZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KHJlcXVlc3Q6IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSk6IE9ic2VydmFibGU8UmlzcG9zdGFDb25uZWN0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0Q29ubmVjdCh0aGlzLmVudi5jb25uZWN0U2VydmljZU5hbWUsIHJlcXVlc3QpO1xuICB9XG59XG4iXX0=