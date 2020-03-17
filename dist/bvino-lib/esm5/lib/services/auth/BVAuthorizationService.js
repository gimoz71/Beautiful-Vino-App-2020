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
     * @param {?} username
     * @return {?}
     */
    BVAuthorizationService.prototype.forgotPassword = /**
     * @param {?} username
     * @return {?}
     */
    function (username) {
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
            cognitoUser.forgotPassword({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLE1BQU0sNEJBQTRCLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBR3JELFFBQVEsR0FBRztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsUUFBUSxFQUFFLDRCQUE0QjtDQUN2Qzs7SUFFSyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0FBRTlDO0lBU0UsZ0NBQVksY0FBOEI7SUFFMUMsQ0FBQzs7OztJQU5ELHlDQUFROzs7SUFBUjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNTSx1Q0FBTTs7Ozs7SUFBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0I7O1lBQ3hDLGtCQUFrQixHQUFHO1lBQ3pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBQ25COztZQUNLLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7O1lBRXJFLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxRQUFRO1NBQ2Y7O1lBQ0ssV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUU3QyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRO1lBQy9CLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDbEQsU0FBUzs7OztnQkFBRSxVQUFVLE1BQU07b0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFBO2dCQUNELFNBQVM7Ozs7Z0JBQUUsVUFBVSxHQUFHO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUE7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sK0NBQWM7Ozs7SUFBckIsVUFBc0IsUUFBZ0I7O1lBRTlCLFFBQVEsR0FBRztZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxRQUFRO1NBQ2Y7O1lBQ0ssV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUU3QyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRO1lBQy9CLFdBQVcsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVM7Ozs7Z0JBQUUsVUFBVSxNQUFNO29CQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQTtnQkFDRCxTQUFTOzs7O2dCQUFFLFVBQVUsR0FBRztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFBO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sMkNBQVU7OztJQUFqQjtRQUNFLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0scURBQW9COzs7SUFBM0I7UUFDRSxPQUFPLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkFwRUYsVUFBVTs7OztnQkFWRixjQUFjOztJQWdGdkIsNkJBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQXJFWSxzQkFBc0I7OztJQUVqQyw2Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscywgQ29nbml0b1VzZXIsIENvZ25pdG9Vc2VyUG9vbCwgQ29nbml0b1VzZXJTZXNzaW9uIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8taWRlbnRpdHktanMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvZGVEZWxpdmVyeURldGFpbHNUeXBlIH0gZnJvbSAnYXdzLXNkay9jbGllbnRzL2NvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlcic7XG5cbmNvbnN0IHBvb2xEYXRhID0ge1xuICBVc2VyUG9vbElkOiAnZXUtY2VudHJhbC0xX0t6bE12M0J3TCcsXG4gIENsaWVudElkOiAnMjVpNnNmaWJsNHFxcWsyZzh2Z3NtdHN0aDcnXG59O1xuXG5jb25zdCB1c2VyUG9vbCA9IG5ldyBDb2duaXRvVXNlclBvb2wocG9vbERhdGEpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQlZBdXRob3JpemF0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29nbml0b1VzZXI6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UpIHtcblxuICB9XG5cbiAgcHVibGljIHNpZ25pbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb2duaXRvVXNlclNlc3Npb24+IHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQYXNzd29yZDogcGFzc3dvcmRcbiAgICB9O1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IG5ldyBBdXRoZW50aWNhdGlvbkRldGFpbHMoYXV0aGVudGljYXRpb25EYXRhKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUG9vbDogdXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb2duaXRvVXNlci5hdXRoZW50aWNhdGVVc2VyKGF1dGhlbnRpY2F0aW9uRGV0YWlscywge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25GYWlsdXJlOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3Jnb3RQYXNzd29yZCh1c2VybmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb2RlRGVsaXZlcnlEZXRhaWxzVHlwZT4ge1xuXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQb29sOiB1c2VyUG9vbFxuICAgIH07XG4gICAgY29uc3QgY29nbml0b1VzZXIgPSBuZXcgQ29nbml0b1VzZXIodXNlckRhdGEpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmZvcmdvdFBhc3N3b3JkKHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbHVyZTogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNMb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdXRoZW50aWNhdGVkVXNlcigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKTtcbiAgfVxuXG59XG4iXX0=