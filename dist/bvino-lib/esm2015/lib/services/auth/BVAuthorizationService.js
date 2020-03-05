/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlZBdXRob3JpemF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLE1BQU0sNEJBQTRCLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O01BRXJELFFBQVEsR0FBRztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsUUFBUSxFQUFFLDRCQUE0QjtDQUN2Qzs7TUFFSyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0FBRzlDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFRakMsWUFBWSxjQUE4QjtJQUUxQyxDQUFDOzs7O0lBTkQsUUFBUTtRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNTSxNQUFNLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7Y0FDeEMsa0JBQWtCLEdBQUc7WUFDekIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkI7O2NBQ0sscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQzs7Y0FFckUsUUFBUSxHQUFHO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsSUFBSSxFQUFFLFFBQVE7U0FDZjs7Y0FDSyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRTdDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2xELFNBQVM7Ozs7Z0JBQUUsVUFBVSxNQUFNO29CQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQTtnQkFDRCxTQUFTOzs7O2dCQUFFLFVBQVUsR0FBRztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFBO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQTlDRixVQUFVOzs7O1lBVEYsY0FBYzs7OztJQVlyQiw2Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscywgQ29nbml0b1VzZXIsIENvZ25pdG9Vc2VyUG9vbCwgQ29nbml0b1VzZXJTZXNzaW9uIH0gZnJvbSAnYW1hem9uLWNvZ25pdG8taWRlbnRpdHktanMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuY29uc3QgcG9vbERhdGEgPSB7XG4gIFVzZXJQb29sSWQ6ICdldS1jZW50cmFsLTFfS3psTXYzQndMJyxcbiAgQ2xpZW50SWQ6ICcyNWk2c2ZpYmw0cXFxazJnOHZnc210c3RoNydcbn07XG5cbmNvbnN0IHVzZXJQb29sID0gbmV3IENvZ25pdG9Vc2VyUG9vbChwb29sRGF0YSk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCVkF1dGhvcml6YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb2duaXRvVXNlcjogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSkge1xuXG4gIH1cblxuICBwdWJsaWMgc2lnbmluKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvZ25pdG9Vc2VyU2Vzc2lvbj4ge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGF0YSA9IHtcbiAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIFBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH07XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EZXRhaWxzID0gbmV3IEF1dGhlbnRpY2F0aW9uRGV0YWlscyhhdXRoZW50aWNhdGlvbkRhdGEpO1xuXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICBVc2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBQb29sOiB1c2VyUG9vbFxuICAgIH07XG4gICAgY29uc3QgY29nbml0b1VzZXIgPSBuZXcgQ29nbml0b1VzZXIodXNlckRhdGEpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvZ25pdG9Vc2VyLmF1dGhlbnRpY2F0ZVVzZXIoYXV0aGVudGljYXRpb25EZXRhaWxzLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCkgIT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gICAgcmV0dXJuIHVzZXJQb29sLmdldEN1cnJlbnRVc2VyKCk7XG4gIH1cblxufVxuIl19