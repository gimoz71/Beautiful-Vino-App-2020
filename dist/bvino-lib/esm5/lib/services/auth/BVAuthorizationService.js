/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
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
     * @param {?} name
     * @return {?}
     */
    BVAuthorizationService.prototype.signup = /**
     * @param {?} username
     * @param {?} password
     * @param {?} name
     * @return {?}
     */
    function (username, password, name) {
        /** @type {?} */
        var attributeList = [];
        /** @type {?} */
        var dataEmail = {
            Name: 'email',
            Value: username
        };
        /** @type {?} */
        var dataPersonalName = {
            Name: 'name',
            Value: name
        };
        /** @type {?} */
        var dataPersonalNickname = {
            Name: 'nickname',
            Value: name
        };
        /** @type {?} */
        var emailAttribute = new CognitoUserAttribute(dataEmail);
        /** @type {?} */
        var nameAttribute = new CognitoUserAttribute(dataPersonalName);
        /** @type {?} */
        var nicknameAttribute = new CognitoUserAttribute(dataPersonalNickname);
        attributeList.push(emailAttribute);
        attributeList.push(nameAttribute);
        attributeList.push(nicknameAttribute);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return userPool.signUp(username, password, attributeList, null, (/**
             * @param {?} err
             * @param {?} result
             * @return {?}
             */
            function (err, result) {
                if (err) {
                    observer.error(err);
                    console.log(err);
                }
                else {
                    observer.next(result);
                    observer.complete();
                }
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBR3JELFFBQVEsR0FBRztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsUUFBUSxFQUFFLDRCQUE0QjtDQUN2Qzs7SUFFSyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0FBRTlDO0lBU0UsZ0NBQVksY0FBOEI7SUFFMUMsQ0FBQzs7OztJQU5ELHlDQUFROzs7SUFBUjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBTU0sdUNBQU07Ozs7OztJQUFiLFVBQWMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLElBQVk7O1lBRXRELGFBQWEsR0FBRyxFQUFFOztZQUVsQixTQUFTLEdBQUc7WUFDaEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNoQjs7WUFFSyxnQkFBZ0IsR0FBRztZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1o7O1lBRUssb0JBQW9CLEdBQUc7WUFDM0IsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWjs7WUFFSyxjQUFjLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7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QUMsY0FBYyxFQUFFLEtBQUssSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFTSxxREFBb0I7OztJQUEzQjtRQUNFLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQTVHRixVQUFVOzs7O2dCQVZGLGNBQWM7O0lBd0h2Qiw2QkFBQztDQUFBLEFBOUdELElBOEdDO1NBN0dZLHNCQUFzQjs7O0lBRWpDLDZDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzLCBDb2duaXRvVXNlciwgQ29nbml0b1VzZXJQb29sLCBDb2duaXRvVXNlclNlc3Npb24sIENvZ25pdG9Vc2VyQXR0cmlidXRlIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8taWRlbnRpdHktanMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvZGVEZWxpdmVyeURldGFpbHNUeXBlIH0gZnJvbSAnYXdzLXNkay9jbGllbnRzL2NvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlcic7XG5cbmNvbnN0IHBvb2xEYXRhID0ge1xuICBVc2VyUG9vbElkOiAnZXUtY2VudHJhbC0xX0t6bE12M0J3TCcsXG4gIENsaWVudElkOiAnMjVpNnNmaWJsNHFxcWsyZzh2Z3NtdHN0aDcnXG59O1xuXG5jb25zdCB1c2VyUG9vbCA9IG5ldyBDb2duaXRvVXNlclBvb2wocG9vbERhdGEpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQlZBdXRob3JpemF0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29nbml0b1VzZXI6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UpIHtcblxuICB9XG5cbiAgcHVibGljIHNpZ251cCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZGVEZWxpdmVyeURldGFpbHNUeXBlPiB7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW107XG5cbiAgICBjb25zdCBkYXRhRW1haWwgPSB7XG4gICAgICBOYW1lOiAnZW1haWwnLFxuICAgICAgVmFsdWU6IHVzZXJuYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGFQZXJzb25hbE5hbWUgPSB7XG4gICAgICBOYW1lOiAnbmFtZScsXG4gICAgICBWYWx1ZTogbmFtZVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhUGVyc29uYWxOaWNrbmFtZSA9IHtcbiAgICAgIE5hbWU6ICduaWNrbmFtZScsXG4gICAgICBWYWx1ZTogbmFtZVxuICAgIH07XG5cbiAgICBjb25zdCBlbWFpbEF0dHJpYnV0ZSA9IG5ldyBDb2duaXRvVXNlckF0dHJpYnV0ZShkYXRhRW1haWwpO1xuICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGUgPSBuZXcgQ29nbml0b1VzZXJBdHRyaWJ1dGUoZGF0YVBlcnNvbmFsTmFtZSk7XG4gICAgY29uc3Qgbmlja25hbWVBdHRyaWJ1dGUgPSBuZXcgQ29nbml0b1VzZXJBdHRyaWJ1dGUoZGF0YVBlcnNvbmFsTmlja25hbWUpO1xuXG4gICAgYXR0cmlidXRlTGlzdC5wdXNoKGVtYWlsQXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVMaXN0LnB1c2gobmFtZUF0dHJpYnV0ZSk7XG4gICAgYXR0cmlidXRlTGlzdC5wdXNoKG5pY2tuYW1lQXR0cmlidXRlKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICByZXR1cm4gdXNlclBvb2wuc2lnblVwKHVzZXJuYW1lLCBwYXNzd29yZCwgYXR0cmlidXRlTGlzdCwgbnVsbCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNpZ25pbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb2duaXRvVXNlclNlc3Npb24+IHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQYXNzd29yZDogcGFzc3dvcmRcbiAgICB9O1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IG5ldyBBdXRoZW50aWNhdGlvbkRldGFpbHMoYXV0aGVudGljYXRpb25EYXRhKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUG9vbDogdXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb2duaXRvVXNlci5hdXRoZW50aWNhdGVVc2VyKGF1dGhlbnRpY2F0aW9uRGV0YWlscywge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25GYWlsdXJlOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3Jnb3RQYXNzd29yZCh1c2VybmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb2RlRGVsaXZlcnlEZXRhaWxzVHlwZT4ge1xuXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQb29sOiB1c2VyUG9vbFxuICAgIH07XG4gICAgY29uc3QgY29nbml0b1VzZXIgPSBuZXcgQ29nbml0b1VzZXIodXNlckRhdGEpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmZvcmdvdFBhc3N3b3JkKHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbHVyZTogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNMb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdXRoZW50aWNhdGVkVXNlcigpIHtcbiAgICByZXR1cm4gdXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKTtcbiAgfVxuXG59XG4iXX0=