import { OnInit } from '@angular/core';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
import { CodeDeliveryDetailsType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
export declare class BVAuthorizationService implements OnInit {
    cognitoUser: any;
    ngOnInit(): void;
    constructor(sessionService: SessionService);
    signup(username: string, password: string, name: string): Observable<CodeDeliveryDetailsType>;
    signin(username: string, password: string): Observable<CognitoUserSession>;
    forgotPassword(username: string): Observable<CodeDeliveryDetailsType>;
    isLoggedIn(): boolean;
    getAuthenticatedUser(): CognitoUser;
}
