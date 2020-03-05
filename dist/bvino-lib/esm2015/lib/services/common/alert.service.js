/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
export class AlertService {
    /**
     * @param {?} router
     * @param {?} toastrService
     */
    constructor(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentAlert(alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.toastrService.success(alertMessage);
        });
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentErrorAlert(alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.toastrService.error(alertMessage);
        });
    }
}
AlertService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertService.ctorParameters = () => [
    { type: Router },
    { type: ToastrService }
];
if (false) {
    /** @type {?} */
    AlertService.prototype.router;
    /** @type {?} */
    AlertService.prototype.toastrService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE1BQU0sT0FBTyxZQUFZOzs7OztJQUV2QixZQUNTLE1BQWMsRUFDZCxhQUE0QjtRQUQ1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDckMsQ0FBQzs7Ozs7SUFFWSxZQUFZLENBQUMsWUFBb0I7O1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTs7Ozs7SUFFWSxpQkFBaUIsQ0FBQyxZQUFvQjs7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBOzs7WUFkRixVQUFVOzs7O1lBRkYsTUFBTTtZQUROLGFBQWE7Ozs7SUFPbEIsOEJBQXFCOztJQUNyQixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwcmVzZW50QWxlcnQoYWxlcnRNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvYXN0clNlcnZpY2Uuc3VjY2VzcyhhbGVydE1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHByZXNlbnRFcnJvckFsZXJ0KGFsZXJ0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy50b2FzdHJTZXJ2aWNlLmVycm9yKGFsZXJ0TWVzc2FnZSk7XG4gIH1cbn1cblxuIl19