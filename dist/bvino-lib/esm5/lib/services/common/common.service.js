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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbkQ7SUFHRSx5QkFDVSxXQUEwQixFQUNYLEdBQVE7UUFEdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDWCxRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQzdCLENBQUM7Ozs7O0lBRUUscUNBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBa0M7UUFDbkQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRU0sNkJBQUc7Ozs7SUFBVixVQUFXLE9BQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFTSw2QkFBRzs7OztJQUFWLFVBQVcsT0FBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkFsQkYsVUFBVTs7OztnQkFQRixhQUFhO2dEQVlqQixNQUFNLFNBQUMsS0FBSzs7SUFjakIsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxlQUFlOzs7Ozs7SUFHeEIsc0NBQWtDOzs7OztJQUNsQyw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmlzcG9zdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmlzcG9zdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBCVkh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9idmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmljaGllc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmlzcG9zdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmlzcG9zdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmljaGllc3Rhbm90aWZpY2FnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmlzcG9zdGFub3RpZmljYWdlbmVyaWNhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJWQ29tbW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogQlZIdHRwU2VydmljZSxcbiAgICBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogYW55XG4gICkgeyB9XG5cbiAgcHVibGljIHB1dE5vdGlmaWNhKHJlcXVlc3Q6IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3ROb3RpZmljYSh0aGlzLmVudi5ub3RpZmljYXRpb25TZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgcHV0KHJlcXVlc3Q6IFJpY2hpZXN0YVB1dEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YVB1dEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdFB1dCh0aGlzLmVudi5wdXRTZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KHJlcXVlc3Q6IFJpY2hpZXN0YUdldEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YUdldEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmVudi5nZXRTZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==