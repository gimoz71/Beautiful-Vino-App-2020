/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BVHttpService } from './bvhttp.service';
import { Injectable, Inject } from '@angular/core';
export class BVCommonService {
    /**
     * @param {?} httpService
     * @param {?} env
     */
    constructor(httpService, env) {
        this.httpService = httpService;
        this.env = env;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    putNotifica(request) {
        return this.httpService.postNotifica(this.env.notificationServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    put(request) {
        return this.httpService.postPut(this.env.putServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    get(request) {
        return this.httpService.post(this.env.getServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    connect(request) {
        return this.httpService.postConnect(this.env.connectServiceName, request);
    }
}
BVCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVCommonService.ctorParameters = () => [
    { type: BVHttpService },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbkQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRTFCLFlBQ1UsV0FBMEIsRUFDWCxHQUFRO1FBRHZCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ1gsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUM3QixDQUFDOzs7OztJQUVFLFdBQVcsQ0FBQyxPQUFrQztRQUNuRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFTSxHQUFHLENBQUMsT0FBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVNLEdBQUcsQ0FBQyxPQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLE9BQWlDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUF0QkYsVUFBVTs7OztZQVRGLGFBQWE7NENBY2pCLE1BQU0sU0FBQyxLQUFLOzs7Ozs7O0lBRGIsc0NBQWtDOzs7OztJQUNsQyw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoaWVzdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmljaGllc3RhcHV0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmlzcG9zdGFQdXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9wdXQvcmlzcG9zdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBCVkh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9idmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmljaGllc3RhZ2V0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmlzcG9zdGFHZXRHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9nZXQvcmlzcG9zdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmljaGllc3Rhbm90aWZpY2FnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YU5vdGlmaWNhR2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvbm90aWZpY2EvcmlzcG9zdGFub3RpZmljYWdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YUNvbm5lY3RHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9jb25uZWN0L3JpY2hpZXN0YWNvbm5lY3RnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YUNvbm5lY3RHZW5lcmljYSB9IGZyb20gJy4uLy4uL21vZGVscy9jb211bmljYXppb25pL3JpY2hpZXN0ZS9jb25uZWN0L3Jpc3Bvc3RhY29ubmVjdGdlbmVyaWNhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJWQ29tbW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogQlZIdHRwU2VydmljZSxcbiAgICBASW5qZWN0KCdlbnYnKSBwcml2YXRlIGVudjogYW55XG4gICkgeyB9XG5cbiAgcHVibGljIHB1dE5vdGlmaWNhKHJlcXVlc3Q6IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3ROb3RpZmljYSh0aGlzLmVudi5ub3RpZmljYXRpb25TZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgcHV0KHJlcXVlc3Q6IFJpY2hpZXN0YVB1dEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YVB1dEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdFB1dCh0aGlzLmVudi5wdXRTZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KHJlcXVlc3Q6IFJpY2hpZXN0YUdldEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YUdldEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmVudi5nZXRTZXJ2aWNlTmFtZSwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdChyZXF1ZXN0OiBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhQ29ubmVjdEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdENvbm5lY3QodGhpcy5lbnYuY29ubmVjdFNlcnZpY2VOYW1lLCByZXF1ZXN0KTtcbiAgfVxufVxuIl19