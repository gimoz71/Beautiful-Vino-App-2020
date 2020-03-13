/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
export class BVHttpService {
    /**
     * @param {?} http
     * @param {?} backEnd
     * @param {?} env
     */
    constructor(http, backEnd, env) {
        this.http = http;
        this.backEnd = backEnd;
        this.env = env;
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    post(path, request) {
        return this.http.post(this.env.baseAppUrlGet
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postPut(path, request) {
        return this.http.post(this.env.baseAppUrlPut
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postNotifica(path, request) {
        return this.http.post(this.env.baseAppUrlNotifica
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postConnect(path, request) {
        return this.http.post(this.env.baseAppUrlConnect
            + this.env.pathSeparator
            + path, request);
    }
}
BVHttpService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVHttpService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpBackend },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9idmluby1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2J2aHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBZS9ELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFFeEIsWUFDVSxJQUFnQixFQUNoQixPQUFvQixFQUNMLEdBQVE7UUFGdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ0wsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUNqQyxDQUFDOzs7Ozs7SUFFTSxJQUFJLENBQUMsSUFBWSxFQUFFLE9BQTZCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7Y0FDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLE9BQU8sQ0FBQyxJQUFZLEVBQUUsT0FBNkI7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtjQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sWUFBWSxDQUFDLElBQVksRUFBRSxPQUFrQztRQUNsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtjQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7Y0FDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxJQUFZLEVBQUUsT0FBaUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7Y0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO2NBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7WUFuQ0YsVUFBVTs7OztZQWRGLFVBQVU7WUFBRSxXQUFXOzRDQW9CM0IsTUFBTSxTQUFDLEtBQUs7Ozs7Ozs7SUFGYiw2QkFBd0I7Ozs7O0lBQ3hCLGdDQUE0Qjs7Ozs7SUFDNUIsNEJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSaXNwb3N0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaXNwb3N0YWdldGdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YUdldEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL2dldC9yaWNoaWVzdGFnZXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaXNwb3N0YVB1dEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL3B1dC9yaXNwb3N0YXB1dGdlbmVyaWNhJztcbmltcG9ydCB7IFJpY2hpZXN0YVB1dEdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL3B1dC9yaWNoaWVzdGFwdXRnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFOb3RpZmljYUdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL25vdGlmaWNhL3JpY2hpZXN0YW5vdGlmaWNhZ2VuZXJpY2EnO1xuaW1wb3J0IHsgUmlzcG9zdGFOb3RpZmljYUdlbmVyaWNhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXVuaWNhemlvbmkvcmljaGllc3RlL25vdGlmaWNhL3Jpc3Bvc3Rhbm90aWZpY2FnZW5lcmljYSc7XG5pbXBvcnQgeyBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvY29ubmVjdC9yaWNoaWVzdGFjb25uZWN0Z2VuZXJpY2EnO1xuaW1wb3J0IHsgUmlzcG9zdGFDb25uZWN0R2VuZXJpY2EgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tdW5pY2F6aW9uaS9yaWNoaWVzdGUvY29ubmVjdC9yaXNwb3N0YWNvbm5lY3RnZW5lcmljYSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJWSHR0cFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGJhY2tFbmQ6IEh0dHBCYWNrZW5kLFxuICAgIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52OiBhbnkpIHtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0KHBhdGg6IHN0cmluZywgcmVxdWVzdDogUmljaGllc3RhR2V0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhR2V0R2VuZXJpY2E+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmlzcG9zdGFHZXRHZW5lcmljYT4oXG4gICAgICB0aGlzLmVudi5iYXNlQXBwVXJsR2V0XG4gICAgICArIHRoaXMuZW52LnBhdGhTZXBhcmF0b3JcbiAgICAgICsgcGF0aCwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgcG9zdFB1dChwYXRoOiBzdHJpbmcsIHJlcXVlc3Q6IFJpY2hpZXN0YVB1dEdlbmVyaWNhKTogT2JzZXJ2YWJsZTxSaXNwb3N0YVB1dEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJpc3Bvc3RhUHV0R2VuZXJpY2E+KFxuICAgICAgdGhpcy5lbnYuYmFzZUFwcFVybFB1dFxuICAgICAgKyB0aGlzLmVudi5wYXRoU2VwYXJhdG9yXG4gICAgICArIHBhdGgsIHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIHBvc3ROb3RpZmljYShwYXRoOiBzdHJpbmcsIHJlcXVlc3Q6IFJpY2hpZXN0YU5vdGlmaWNhR2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhTm90aWZpY2FHZW5lcmljYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSaXNwb3N0YU5vdGlmaWNhR2VuZXJpY2E+KFxuICAgICAgdGhpcy5lbnYuYmFzZUFwcFVybE5vdGlmaWNhXG4gICAgICArIHRoaXMuZW52LnBhdGhTZXBhcmF0b3JcbiAgICAgICsgcGF0aCwgcmVxdWVzdCk7XG4gIH1cblxuICBwdWJsaWMgcG9zdENvbm5lY3QocGF0aDogc3RyaW5nLCByZXF1ZXN0OiBSaWNoaWVzdGFDb25uZWN0R2VuZXJpY2EpOiBPYnNlcnZhYmxlPFJpc3Bvc3RhQ29ubmVjdEdlbmVyaWNhPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJpc3Bvc3RhQ29ubmVjdEdlbmVyaWNhPihcbiAgICAgIHRoaXMuZW52LmJhc2VBcHBVcmxDb25uZWN0XG4gICAgICArIHRoaXMuZW52LnBhdGhTZXBhcmF0b3JcbiAgICAgICsgcGF0aCwgcmVxdWVzdCk7XG4gIH1cblxufVxuIl19