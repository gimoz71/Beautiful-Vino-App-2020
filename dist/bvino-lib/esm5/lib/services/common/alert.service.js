/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
var AlertService = /** @class */ (function () {
    function AlertService(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.toastrService.success(alertMessage);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentErrorAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.toastrService.error(alertMessage);
                return [2 /*return*/];
            });
        });
    };
    AlertService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertService.ctorParameters = function () { return [
        { type: Router },
        { type: ToastrService }
    ]; };
    return AlertService;
}());
export { AlertService };
if (false) {
    /** @type {?} */
    AlertService.prototype.router;
    /** @type {?} */
    AlertService.prototype.toastrService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDO0lBR0Usc0JBQ1MsTUFBYyxFQUNkLGFBQTRCO1FBRDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNyQyxDQUFDOzs7OztJQUVZLG1DQUFZOzs7O0lBQXpCLFVBQTBCLFlBQW9COzs7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7O0tBQzFDOzs7OztJQUVZLHdDQUFpQjs7OztJQUE5QixVQUErQixZQUFvQjs7O2dCQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7OztLQUN4Qzs7Z0JBZEYsVUFBVTs7OztnQkFGRixNQUFNO2dCQUROLGFBQWE7O0lBa0J0QixtQkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLFlBQVk7OztJQUdyQiw4QkFBcUI7O0lBQ3JCLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSkge1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHByZXNlbnRBbGVydChhbGVydE1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zdWNjZXNzKGFsZXJ0TWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcHJlc2VudEVycm9yQWxlcnQoYWxlcnRNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvYXN0clNlcnZpY2UuZXJyb3IoYWxlcnRNZXNzYWdlKTtcbiAgfVxufVxuXG4iXX0=