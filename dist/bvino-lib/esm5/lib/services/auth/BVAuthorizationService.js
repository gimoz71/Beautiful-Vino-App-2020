/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
/** @type {?} */
var poolData = {
    UserPoolId: 'eu-central-1_KzlMv3BwL',
    ClientId: '25i6sfibl4qqqk2g8vgsmtsth7'
};
/** @type {?} */
var userPool = new CognitoUserPool(poolData);
var BVAuthorizationService = /** @class */ (function () {
    function BVAuthorizationService(sessionService) {
    }
    /**
     * @return {?}
     */
    BVAuthorizationService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        throw new Error('Method not implemented.');
    };
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    BVAuthorizationService.prototype.signin = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        /** @type {?} */
        var authenticationData = {
            Username: username,
            Password: password
        };
        /** @type {?} */
        var authenticationDetails = new AuthenticationDetails(authenticationData);
        /** @type {?} */
        var userData = {
            Username: username,
            Pool: userPool
        };
        /** @type {?} */
        var cognitoUser = new CognitoUser(userData);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: (/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    observer.next(result);
                    observer.complete();
                }),
                onFailure: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    console.log(err);
                    observer.error(err);
                })
            });
        }));
    };
    /**
     * @return {?}
     */
    BVAuthorizationService.prototype.isLoggedIn = /**
     * @return {?}
     */
    function () {
        return userPool.getCurrentUser() !== null;
    };
    /**
     * @return {?}
     */
    BVAuthorizationService.prototype.getAuthenticatedUser = /**
     * @return {?}
     */
    function () {
        return userPool.getCurrentUser();
    };
    BVAuthorizationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVAuthorizationService.ctorParameters = function () { return [
        { type: SessionService }
    ]; };
    return BVAuthorizationService;
}());
export { BVAuthorizationService };
if (false) {
    /** @type {?} */
    BVAuthorizationService.prototype.cognitoUser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLE1BQU0sNEJBQTRCLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBRXJELFFBQVEsR0FBRztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsUUFBUSxFQUFFLDRCQUE0QjtDQUN2Qzs7SUFFSyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0FBRTlDO0lBU0UsZ0NBQVksY0FBOEI7SUFFMUMsQ0FBQzs7OztJQU5ELHlDQUFROzs7SUFBUjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNTSx1Q0FBTTs7Ozs7SUFBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0I7O1lBQ3hDLGtCQUFrQixHQUFHO1lBQ3pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBQ25COztZQUNLLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7O1lBRXJFLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxRQUFRO1NBQ2Y7O1lBQ0ssV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUU3QyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRO1lBQy9CLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDbEQsU0FBUzs7OztnQkFBRSxVQUFVLE1BQU07b0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFBO2dCQUNELFNBQVM7Ozs7Z0JBQUUsVUFBVSxHQUFHO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUE7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSwyQ0FBVTs7O0lBQWpCO1FBQ0UsT0FBTyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFTSxxREFBb0I7OztJQUEzQjtRQUNFLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQTlDRixVQUFVOzs7O2dCQVRGLGNBQWM7O0lBeUR2Qiw2QkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLHNCQUFzQjs7O0lBRWpDLDZDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzLCBDb2duaXRvVXNlciwgQ29nbml0b1VzZXJQb29sLCBDb2duaXRvVXNlclNlc3Npb24gfSBmcm9tICdhbWF6b24tY29nbml0by1pZGVudGl0eS1qcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5jb25zdCBwb29sRGF0YSA9IHtcbiAgVXNlclBvb2xJZDogJ2V1LWNlbnRyYWwtMV9LemxNdjNCd0wnLFxuICBDbGllbnRJZDogJzI1aTZzZmlibDRxcXFrMmc4dmdzbXRzdGg3J1xufTtcblxuY29uc3QgdXNlclBvb2wgPSBuZXcgQ29nbml0b1VzZXJQb29sKHBvb2xEYXRhKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJWQXV0aG9yaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvZ25pdG9Vc2VyOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBzaWduaW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29nbml0b1VzZXJTZXNzaW9uPiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBuZXcgQXV0aGVudGljYXRpb25EZXRhaWxzKGF1dGhlbnRpY2F0aW9uRGF0YSk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHVzZXJQb29sXG4gICAgfTtcbiAgICBjb25zdCBjb2duaXRvVXNlciA9IG5ldyBDb2duaXRvVXNlcih1c2VyRGF0YSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29nbml0b1VzZXIuYXV0aGVudGljYXRlVXNlcihhdXRoZW50aWNhdGlvbkRldGFpbHMsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbHVyZTogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNMb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdXRoZW50aWNhdGVkVXNlcigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKTtcbiAgfVxuXG59XG4iXX0=