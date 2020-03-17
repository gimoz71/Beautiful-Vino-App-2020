/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
/** @type {?} */
const poolData = {
    UserPoolId: 'eu-central-1_KzlMv3BwL',
    ClientId: '25i6sfibl4qqqk2g8vgsmtsth7'
};
/** @type {?} */
const userPool = new CognitoUserPool(poolData);
export class BVAuthorizationService {
    /**
     * @param {?} sessionService
     */
    constructor(sessionService) {
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
            Pool: userPool
        };
        /** @type {?} */
        const cognitoUser = new CognitoUser(userData);
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
                })
            });
        }));
    }
    /**
     * @param {?} username
     * @return {?}
     */
    forgotPassword(username) {
        /** @type {?} */
        const userData = {
            Username: username,
            Pool: userPool
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
     * @return {?}
     */
    isLoggedIn() {
        return userPool.getCurrentUser() !== null;
    }
    /**
     * @return {?}
     */
    getAuthenticatedUser() {
        return userPool.getCurrentUser();
    }
}
BVAuthorizationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVAuthorizationService.ctorParameters = () => [
    { type: SessionService }
];
if (false) {
    /** @type {?} */
    BVAuthorizationService.prototype.cognitoUser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O01BR3JELFFBQVEsR0FBRztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsUUFBUSxFQUFFLDRCQUE0QjtDQUN2Qzs7TUFFSyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0FBRzlDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFRakMsWUFBWSxjQUE4QjtJQUUxQyxDQUFDOzs7O0lBTkQsUUFBUTtRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBTU0sTUFBTSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZOztjQUV0RCxhQUFhLEdBQUcsRUFBRTs7Y0FFbEIsU0FBUyxHQUFHO1lBQ2hCLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEI7O2NBRUssZ0JBQWdCLEdBQUc7WUFDdkIsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNaOztjQUVLLG9CQUFvQixHQUFHO1lBQzNCLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1NBQ1o7O2NBRUssY0FBYyxHQUFHLElBQUksb0JBQW9CLENBQUMsU0FBUyxDQUFD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QUFLLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQTVHRixVQUFVOzs7O1lBVkYsY0FBYzs7OztJQWFyQiw2Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscywgQ29nbml0b1VzZXIsIENvZ25pdG9Vc2VyUG9vbCwgQ29nbml0b1VzZXJTZXNzaW9uLCBDb2duaXRvVXNlckF0dHJpYnV0ZSB9IGZyb20gJ2FtYXpvbi1jb2duaXRvLWlkZW50aXR5LWpzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb2RlRGVsaXZlcnlEZXRhaWxzVHlwZSB9IGZyb20gJ2F3cy1zZGsvY2xpZW50cy9jb2duaXRvaWRlbnRpdHlzZXJ2aWNlcHJvdmlkZXInO1xuXG5jb25zdCBwb29sRGF0YSA9IHtcbiAgVXNlclBvb2xJZDogJ2V1LWNlbnRyYWwtMV9LemxNdjNCd0wnLFxuICBDbGllbnRJZDogJzI1aTZzZmlibDRxcXFrMmc4dmdzbXRzdGg3J1xufTtcblxuY29uc3QgdXNlclBvb2wgPSBuZXcgQ29nbml0b1VzZXJQb29sKHBvb2xEYXRhKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJWQXV0aG9yaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvZ25pdG9Vc2VyOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBzaWdudXAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb2RlRGVsaXZlcnlEZXRhaWxzVHlwZT4ge1xuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgZGF0YUVtYWlsID0ge1xuICAgICAgTmFtZTogJ2VtYWlsJyxcbiAgICAgIFZhbHVlOiB1c2VybmFtZVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhUGVyc29uYWxOYW1lID0ge1xuICAgICAgTmFtZTogJ25hbWUnLFxuICAgICAgVmFsdWU6IG5hbWVcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YVBlcnNvbmFsTmlja25hbWUgPSB7XG4gICAgICBOYW1lOiAnbmlja25hbWUnLFxuICAgICAgVmFsdWU6IG5hbWVcbiAgICB9O1xuXG4gICAgY29uc3QgZW1haWxBdHRyaWJ1dGUgPSBuZXcgQ29nbml0b1VzZXJBdHRyaWJ1dGUoZGF0YUVtYWlsKTtcbiAgICBjb25zdCBuYW1lQXR0cmlidXRlID0gbmV3IENvZ25pdG9Vc2VyQXR0cmlidXRlKGRhdGFQZXJzb25hbE5hbWUpO1xuICAgIGNvbnN0IG5pY2tuYW1lQXR0cmlidXRlID0gbmV3IENvZ25pdG9Vc2VyQXR0cmlidXRlKGRhdGFQZXJzb25hbE5pY2tuYW1lKTtcblxuICAgIGF0dHJpYnV0ZUxpc3QucHVzaChlbWFpbEF0dHJpYnV0ZSk7XG4gICAgYXR0cmlidXRlTGlzdC5wdXNoKG5hbWVBdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZUxpc3QucHVzaChuaWNrbmFtZUF0dHJpYnV0ZSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJQb29sLnNpZ25VcCh1c2VybmFtZSwgcGFzc3dvcmQsIGF0dHJpYnV0ZUxpc3QsIG51bGwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduaW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29nbml0b1VzZXJTZXNzaW9uPiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBuZXcgQXV0aGVudGljYXRpb25EZXRhaWxzKGF1dGhlbnRpY2F0aW9uRGF0YSk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBvb2w6IHVzZXJQb29sXG4gICAgfTtcbiAgICBjb25zdCBjb2duaXRvVXNlciA9IG5ldyBDb2duaXRvVXNlcih1c2VyRGF0YSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29nbml0b1VzZXIuYXV0aGVudGljYXRlVXNlcihhdXRoZW50aWNhdGlvbkRldGFpbHMsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbHVyZTogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZm9yZ290UGFzc3dvcmQodXNlcm5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29kZURlbGl2ZXJ5RGV0YWlsc1R5cGU+IHtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgVXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgUG9vbDogdXNlclBvb2xcbiAgICB9O1xuICAgIGNvbnN0IGNvZ25pdG9Vc2VyID0gbmV3IENvZ25pdG9Vc2VyKHVzZXJEYXRhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb2duaXRvVXNlci5mb3Jnb3RQYXNzd29yZCh7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCkgIT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gICAgcmV0dXJuIHVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCk7XG4gIH1cblxufVxuIl19