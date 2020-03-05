/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * servizio di sessione contenente una mappa che consente di scambiare informazioni nella sessione
 * questo servizio si occupa anche di gestire la persistenza delle informazioni a livello di cookies
 *
 */
var SessionService = /** @class */ (function () {
    function SessionService() {
        this.sessionMap = new Map();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SessionService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.sessionMap.set(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.sessionMap.get(key);
    };
    /**
     * @return {?}
     */
    SessionService.prototype.clearSession = /**
     * @return {?}
     */
    function () {
        this.sessionMap.clear();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.deleteKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.sessionMap.delete(key);
    };
    SessionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionService.ctorParameters = function () { return []; };
    return SessionService;
}());
export { SessionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.sessionMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnZpbm8tbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQU8zQztJQVVFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTSw0QkFBRzs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxLQUFhO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLDRCQUFHOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLHFDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sa0NBQVM7Ozs7SUFBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkE1QkYsVUFBVTs7OztJQThCWCxxQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLGNBQWM7Ozs7OztJQU96QixvQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogc2Vydml6aW8gZGkgc2Vzc2lvbmUgY29udGVuZW50ZSB1bmEgbWFwcGEgY2hlIGNvbnNlbnRlIGRpIHNjYW1iaWFyZSBpbmZvcm1hemlvbmkgbmVsbGEgc2Vzc2lvbmVcbiAqIHF1ZXN0byBzZXJ2aXppbyBzaSBvY2N1cGEgYW5jaGUgZGkgZ2VzdGlyZSBsYSBwZXJzaXN0ZW56YSBkZWxsZSBpbmZvcm1hemlvbmkgYSBsaXZlbGxvIGRpIGNvb2tpZXNcbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cbiAgLypcbiAgICBsYSBtYXBwYSDDqCBmYXR0YSBwZXIgY29udGVuZXJlIHNvbG8gc3RyaW5naGUuIEluIGNhc28gZGkgb2dnZXR0aSBlIEpTT04gdXNhcmVcbiAgICBKU09OLnBhcnNlIChkYSBzdHJpbmdhIGEgb2dnZXR0bylcbiAgICBKU09OLnN0cmluZ2Z5IChkYSBvZ2dldHRvIGEgc3RyaW5nYSlcbiAgKi9cbiAgcHJpdmF0ZSBzZXNzaW9uTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2Vzc2lvbk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXNzaW9uTWFwLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25NYXAuZ2V0KGtleSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZXNzaW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vzc2lvbk1hcC5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUtleShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2Vzc2lvbk1hcC5kZWxldGUoa2V5KTtcbiAgfVxuXG59XG4iXX0=