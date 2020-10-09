/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
import * as CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';
export class BVAuthorizationService {
    /**
     * @param {?} sessionService
     * @param {?} env
     */
    constructor(sessionService, env) {
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
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
    /**
     * @param {?} username
     * @param {?} password
     * @param {?} name
     * @return {?}
     */
    signup(username, password, name) {
        /** @type {?} */
        const attributeList = [];
        /** @type {?} */
        const dataEmail = {
            Name: 'email',
            Value: username
        };
        /** @type {?} */
        const dataPersonalName = {
            Name: 'name',
            Value: name
        };
        /** @type {?} */
        const dataPersonalNickname = {
            Name: 'nickname',
            Value: name
        };
        /** @type {?} */
        const emailAttribute = new CognitoUserAttribute(dataEmail);
        /** @type {?} */
        const nameAttribute = new CognitoUserAttribute(dataPersonalName);
        /** @type {?} */
        const nicknameAttribute = new CognitoUserAttribute(dataPersonalNickname);
        attributeList.push(emailAttribute);
        attributeList.push(nameAttribute);
        attributeList.push(nicknameAttribute);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            return this.userPool.signUp(username, password, attributeList, null, (/**
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
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    signin(username, password) {
        /** @type {?} */
        const authenticationData = {
            Username: username,
            Password: password
        };
        /** @type {?} */
        const authenticationDetails = new AuthenticationDetails(authenticationData);
        /** @type {?} */
        const userData = {
            Username: username,
            Pool: this.userPool
        };
        /** @type {?} */
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
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
    }
    /**
     * @param {?} username
     * @return {?}
     */
    signOut(username) {
        /** @type {?} */
        const userData = {
            Username: username,
            Pool: this.userPool
        };
        /** @type {?} */
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.signOut();
    }
    /**
     * @param {?} username
     * @return {?}
     */
    forgotPassword(username) {
        /** @type {?} */
        const userData = {
            Username: username,
            Pool: this.userPool
        };
        /** @type {?} */
        const cognitoUser = new CognitoUser(userData);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
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
    }
    /**
     * @param {?} username
     * @param {?} oldpassword
     * @param {?} password
     * @return {?}
     */
    changePassword(username, oldpassword, password) {
        /** @type {?} */
        const userData = {
            Username: username,
            Pool: this.userPool
        };
        // const currentUser = this.userPool.getCurrentUser();
        /** @type {?} */
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.getSession((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            /** @type {?} */
            const session = result;
            console.log('session: ' + JSON.stringify(session));
        }));
        /** @type {?} */
        const serviceProvider = new CognitoIdentityServiceProvider({ region: 'eu-central-1' });
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            cognitoUser.changePassword(oldpassword, password, (/**
             * @param {?} error
             * @param {?} result
             * @return {?}
             */
            (error, result) => {
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
    }
    /**
     * @return {?}
     */
    isLoggedIn() {
        return this.userPool.getCurrentUser() !== null;
    }
    /**
     * @return {?}
     */
    getAuthenticatedUser() {
        return this.userPool.getCurrentUser();
    }
}
BVAuthorizationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVAuthorizationService.ctorParameters = () => [
    { type: SessionService },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFDNUIsV0FBVyxFQUNYLGVBQWUsRUFFZixvQkFBb0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sS0FBSyw4QkFBOEIsTUFBTSxnREFBZ0QsQ0FBQztBQUtqRyxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQWVqQyxZQUFZLGNBQThCLEVBQ2pCLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBWnpCLGFBQVEsR0FBRztZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7U0FDNUIsQ0FBQztRQUVNLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFTdEQsQ0FBQzs7OztJQVBELFFBQVE7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQU9NLE1BQU0sQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsSUFBWTs7Y0FFdEQsYUFBYSxHQUFHLEVBQUU7O2NBRWxCLFNBQVMsR0FBRztZQUNoQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2hCOztjQUVLLGdCQUFnQixHQUFHO1lBQ3ZCLElBQUks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LEVBQUUsQ0FBQztRQUV0RixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUTs7Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7Z0JBQ0QsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQy9ELFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUFuS0YsVUFBVTs7OztZQU5GLGNBQWM7NENBdUJsQixNQUFNLFNBQUMsS0FBSzs7OztJQWRmLDZDQUFpQjs7Ozs7SUFFakIsMENBR0U7Ozs7O0lBRUYsMENBQXNEOzs7OztJQU9wRCxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzLFxuICBDb2duaXRvVXNlcixcbiAgQ29nbml0b1VzZXJQb29sLFxuICBDb2duaXRvVXNlclNlc3Npb24sXG4gIENvZ25pdG9Vc2VyQXR0cmlidXRlfSBmcm9tICdhbWF6b24tY29nbml0by1pZGVudGl0eS1qcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29kZURlbGl2ZXJ5RGV0YWlsc1R5cGUgfSBmcm9tICdhd3Mtc2RrL2NsaWVudHMvY29nbml0b2lkZW50aXR5c2VydmljZXByb3ZpZGVyJztcbmltcG9ydCAqIGFzIENvZ25pdG9JZGVudGl0eVNlcnZpY2VQcm92aWRlciBmcm9tICdhd3Mtc2RrL2NsaWVudHMvY29nbml0b2lkZW50aXR5c2VydmljZXByb3ZpZGVyJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCVkF1dGhvcml6YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb2duaXRvVXNlcjogYW55O1xuXG4gIHByaXZhdGUgcG9vbERhdGEgPSB7XG4gICAgVXNlclBvb2xJZDogdGhpcy5lbnYuVXNlclBvb2xJZCxcbiAgICBDbGllbnRJZDogdGhpcy5lbnYuQ2xpZW50SWRcbiAgfTtcblxuICBwcml2YXRlIHVzZXJQb29sID0gbmV3IENvZ25pdG9Vc2VyUG9vbCh0aGlzLnBvb2xEYXRhKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UsXG4gICAgQEluamVjdCgnZW52JykgcHJpdmF0ZSBlbnY6IGFueSkge1xuXG4gIH1cblxuICBwdWJsaWMgc2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29kZURlbGl2ZXJ5RGV0YWlsc1R5cGU+IHtcblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXTtcblxuICAgIGNvbnN0IGRhdGFFbWFpbCA9IHtcbiAgICAgIE5hbWU6ICdlbWFpbCcsXG4gICAgICBWYWx1ZTogdXNlcm5hbWVcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YVBlcnNvbmFsTmFtZSA9IHtcbiAgICAgIE5hbWU6ICduYW1lJyxcbiAgICAgIFZhbHVlOiBuYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGFQZXJzb25hbE5pY2tuYW1lID0ge1xuICAgICAgTmFtZTogJ25pY2tuYW1lJyxcbiAgICAgIFZhbHVlOiBuYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IGVtYWlsQXR0cmlidXRlID0gbmV3IENvZ25pdG9Vc2VyQXR0cmlidXRlKGRhdGFFbWFpbCk7XG4gICAgY29uc3QgbmFtZUF0dHJpYnV0ZSA9IG5ldyBDb2duaXRvVXNlckF0dHJpYnV0ZShkYXRhUGVyc29uYWxOYW1lKTtcbiAgICBjb25zdCBuaWNrbmFtZUF0dHJpYnV0ZSA9IG5ldyBDb2duaXRvVXNlckF0dHJpYnV0ZShkYXRhUGVyc29uYWxOaWNrbmFtZSk7XG5cbiAgICBhdHRyaWJ1dGVMaXN0LnB1c2goZW1haWxBdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZUxpc3QucHVzaChuYW1lQXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVMaXN0LnB1c2gobmlja25hbWVBdHRyaWJ1dGUpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJQb29sLnNpZ25VcCh1c2VybmFtZSwgcGFzc3dvcmQsIGF0dHJpYnV0ZUxpc3QsIG51bGwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduaW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBuZXcgQXV0aGVudGljYXRpb25EZXRhaWxzKGF1dGhlbnRpY2F0aW9uRGF0YSk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIGNvZ25pdG9Vc2VyLnNldEF1dGhlbnRpY2F0aW9uRmxvd1R5cGUoJ1VTRVJfUEFTU1dPUkRfQVVUSCcpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmF1dGhlbnRpY2F0ZVVzZXIoYXV0aGVudGljYXRpb25EZXRhaWxzLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld1Bhc3N3b3JkUmVxdWlyZWQ6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXNwLmNoYWxsZW5nZSA9ICdORVdfUEFTU1dPUkRfUkVRVUlSRUQnO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2lnbk91dCh1c2VybmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQb29sOiB0aGlzLnVzZXJQb29sXG4gICAgfTtcbiAgICBjb25zdCBjb2duaXRvVXNlciA9IG5ldyBDb2duaXRvVXNlcih1c2VyRGF0YSk7XG4gICAgY29nbml0b1VzZXIuc2lnbk91dCgpO1xuICB9XG5cbiAgcHVibGljIGZvcmdvdFBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZGVEZWxpdmVyeURldGFpbHNUeXBlPiB7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb2duaXRvVXNlci5mb3Jnb3RQYXNzd29yZCh7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcsIG9sZHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZGVEZWxpdmVyeURldGFpbHNUeXBlPiB7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHRoaXMudXNlclBvb2xcbiAgICB9O1xuICAgIC8vIGNvbnN0IGN1cnJlbnRVc2VyID0gdGhpcy51c2VyUG9vbC5nZXRDdXJyZW50VXNlcigpO1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIGNvZ25pdG9Vc2VyLmdldFNlc3Npb24ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSByZXN1bHQ7XG4gICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlcnZpY2VQcm92aWRlciA9IG5ldyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIoeyByZWdpb246ICdldS1jZW50cmFsLTEnIH0pO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmNoYW5nZVBhc3N3b3JkKG9sZHBhc3N3b3JkLCBwYXNzd29yZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgY2hhbmdlIHBhc3N3b3JkOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNoYW5nZSBwYXNzd29yZDogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvZ2dlZEluKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCkgIT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclBvb2wuZ2V0Q3VycmVudFVzZXIoKTtcbiAgfVxuXG59XG4iXX0=