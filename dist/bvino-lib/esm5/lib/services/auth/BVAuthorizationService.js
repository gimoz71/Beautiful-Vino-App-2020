/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
import * as CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';
var BVAuthorizationService = /** @class */ (function () {
    function BVAuthorizationService(sessionService, env) {
        this.env = env;
        this.poolData = {
            UserPoolId: this.env.UserPoolId,
            ClientId: this.env.ClientId
        };
        this.userPool = new CognitoUserPool(this.poolData);
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
        var _this = this;
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
            return _this.userPool.signUp(username, password, attributeList, null, (/**
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
            Pool: this.userPool
        };
        /** @type {?} */
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
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
                }),
                newPasswordRequired: (/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    resp.challenge = 'NEW_PASSWORD_REQUIRED';
                    observer.next(resp);
                    observer.complete();
                })
            });
        }));
    };
    /**
     * @param {?} username
     * @return {?}
     */
    BVAuthorizationService.prototype.signOut = /**
     * @param {?} username
     * @return {?}
     */
    function (username) {
        /** @type {?} */
        var userData = {
            Username: username,
            Pool: this.userPool
        };
        /** @type {?} */
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.signOut();
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
            Pool: this.userPool
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
     * @param {?} username
     * @param {?} oldpassword
     * @param {?} password
     * @return {?}
     */
    BVAuthorizationService.prototype.changePassword = /**
     * @param {?} username
     * @param {?} oldpassword
     * @param {?} password
     * @return {?}
     */
    function (username, oldpassword, password) {
        /** @type {?} */
        var userData = {
            Username: username,
            Pool: this.userPool
        };
        // const currentUser = this.userPool.getCurrentUser();
        /** @type {?} */
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.getSession((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            /** @type {?} */
            var session = result;
            console.log('session: ' + JSON.stringify(session));
        }));
        /** @type {?} */
        var serviceProvider = new CognitoIdentityServiceProvider({ region: 'eu-central-1' });
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            cognitoUser.changePassword(oldpassword, password, (/**
             * @param {?} error
             * @param {?} result
             * @return {?}
             */
            function (error, result) {
                if (result) {
                    console.log('result change password: ' + JSON.stringify(result));
                    observer.next(result);
                    observer.complete();
                }
                if (error) {
                    console.log('error change password: ' + JSON.stringify(error));
                    observer.error(error);
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    BVAuthorizationService.prototype.isLoggedIn = /**
     * @return {?}
     */
    function () {
        return this.userPool.getCurrentUser() !== null;
    };
    /**
     * @return {?}
     */
    BVAuthorizationService.prototype.getAuthenticatedUser = /**
     * @return {?}
     */
    function () {
        return this.userPool.getCurrentUser();
    };
    BVAuthorizationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVAuthorizationService.ctorParameters = function () { return [
        { type: SessionService },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return BVAuthorizationService;
}());
export { BVAuthorizationService };
if (false) {
    /** @type {?} */
    BVAuthorizationService.prototype.cognitoUser;
    /**
     * @type {?}
     * @private
     */
    BVAuthorizationService.prototype.poolData;
    /**
     * @type {?}
     * @private
     */
    BVAuthorizationService.prototype.userPool;
    /**
     * @type {?}
     * @private
     */
    BVAuthorizationService.prototype.env;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFDNUIsV0FBVyxFQUNYLGVBQWUsRUFFZixvQkFBb0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sS0FBSyw4QkFBOEIsTUFBTSxnREFBZ0QsQ0FBQztBQUlqRztJQWdCRSxnQ0FBWSxjQUE4QixFQUNqQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQVp6QixhQUFRLEdBQUc7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO1NBQzVCLENBQUM7UUFFTSxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBU3RELENBQUM7Ozs7SUFQRCx5Q0FBUTs7O0lBQVI7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQU9NLHVDQUFNOzs7Ozs7SUFBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO1FBQTlELGlCQXNDQzs7WUFwQ08sYUFBYSxHQUFHLEVBQUU7O1lBRWxCLFNBQVMsR0FBRztZQUNoQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCOztZQUVLLGdCQUFnQixHQUFH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IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzLFxuICBDb2duaXRvVXNlcixcbiAgQ29nbml0b1VzZXJQb29sLFxuICBDb2duaXRvVXNlclNlc3Npb24sXG4gIENvZ25pdG9Vc2VyQXR0cmlidXRlfSBmcm9tICdhbWF6b24tY29nbml0by1pZGVudGl0eS1qcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29kZURlbGl2ZXJ5RGV0YWlsc1R5cGUgfSBmcm9tICdhd3Mtc2RrL2NsaWVudHMvY29nbml0b2lkZW50aXR5c2VydmljZXByb3ZpZGVyJztcbmltcG9ydCAqIGFzIENvZ25pdG9JZGVudGl0eVNlcnZpY2VQcm92aWRlciBmcm9tICdhd3Mtc2RrL2NsaWVudHMvY29nbml0b2lkZW50aXR5c2VydmljZXByb3ZpZGVyJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCVkF1dGhvcml6YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb2duaXRvVXNlcjogYW55O1xuXG4gIHByaXZhdGUgcG9vbERhdGEgPSB7XG4gICAgVXNlclBvb2xJZDogdGhpcy5lbnYuVXNlclBvb2xJZCxcbiAgICBDbGllbnRJZDogdGhpcy5lbnYuQ2xpZW50SWRcbiAgfTtcblxuICBwcml2YXRlIHVzZXJQb29sID0gbmV3IENvZ25pdG9Vc2VyUG9vbCh0aGlzLnBvb2xEYXRhKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UsXG4gICAgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IGFueSkge1xuXG4gIH1cblxuICBwdWJsaWMgc2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29kZURlbGl2ZXJ5RGV0YWlsc1R5cGU+IHtcblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXTtcblxuICAgIGNvbnN0IGRhdGFFbWFpbCA9IHtcbiAgICAgIE5hbWU6ICdlbWFpbCcsXG4gICAgICBWYWx1ZTogdXNlcm5hbWVcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YVBlcnNvbmFsTmFtZSA9IHtcbiAgICAgIE5hbWU6ICduYW1lJyxcbiAgICAgIFZhbHVlOiBuYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGFQZXJzb25hbE5pY2tuYW1lID0ge1xuICAgICAgTmFtZTogJ25pY2tuYW1lJyxcbiAgICAgIFZhbHVlOiBuYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IGVtYWlsQXR0cmlidXRlID0gbmV3IENvZ25pdG9Vc2VyQXR0cmlidXRlKGRhdGFFbWFpbCk7XG4gICAgY29uc3QgbmFtZUF0dHJpYnV0ZSA9IG5ldyBDb2duaXRvVXNlckF0dHJpYnV0ZShkYXRhUGVyc29uYWxOYW1lKTtcbiAgICBjb25zdCBuaWNrbmFtZUF0dHJpYnV0ZSA9IG5ldyBDb2duaXRvVXNlckF0dHJpYnV0ZShkYXRhUGVyc29uYWxOaWNrbmFtZSk7XG5cbiAgICBhdHRyaWJ1dGVMaXN0LnB1c2goZW1haWxBdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZUxpc3QucHVzaChuYW1lQXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVMaXN0LnB1c2gobmlja25hbWVBdHRyaWJ1dGUpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJQb29sLnNpZ25VcCh1c2VybmFtZSwgcGFzc3dvcmQsIGF0dHJpYnV0ZUxpc3QsIG51bGwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduaW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBuZXcgQXV0aGVudGljYXRpb25EZXRhaWxzKGF1dGhlbnRpY2F0aW9uRGF0YSk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIGNvZ25pdG9Vc2VyLnNldEF1dGhlbnRpY2F0aW9uRmxvd1R5cGUoJ1VTRVJfUEFTU1dPUkRfQVVUSCcpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmF1dGhlbnRpY2F0ZVVzZXIoYXV0aGVudGljYXRpb25EZXRhaWxzLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld1Bhc3N3b3JkUmVxdWlyZWQ6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXNwLmNoYWxsZW5nZSA9ICdORVdfUEFTU1dPUkRfUkVRVUlSRUQnO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2lnbk91dCh1c2VybmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQb29sOiB0aGlzLnVzZXJQb29sXG4gICAgfTtcbiAgICBjb25zdCBjb2duaXRvVXNlciA9IG5ldyBDb2duaXRvVXNlcih1c2VyRGF0YSk7XG4gICAgY29nbml0b1VzZXIuc2lnbk91dCgpO1xuICB9XG5cbiAgcHVibGljIGZvcmdvdFBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZGVEZWxpdmVyeURldGFpbHNUeXBlPiB7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb2duaXRvVXNlci5mb3Jnb3RQYXNzd29yZCh7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcsIG9sZHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZGVEZWxpdmVyeURldGFpbHNUeXBlPiB7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIC8vIGNvbnN0IGN1cnJlbnRVc2VyID0gdGhpcy51c2VyUG9vbC5nZXRDdXJyZW50VXNlcigpO1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIGNvZ25pdG9Vc2VyLmdldFNlc3Npb24ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSByZXN1bHQ7XG4gICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlcnZpY2VQcm92aWRlciA9IG5ldyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIoeyByZWdpb246ICdldS1jZW50cmFsLTEnIH0pO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmNoYW5nZVBhc3N3b3JkKG9sZHBhc3N3b3JkLCBwYXNzd29yZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgY2hhbmdlIHBhc3N3b3JkOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNoYW5nZSBwYXNzd29yZDogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvZ2dlZEluKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCkgIT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKTtcbiAgfVxuXG59XG4iXX0=