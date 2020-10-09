import { OnInit } from '@angular/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
import { CodeDeliveryDetailsType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
export declare class BVAuthorizationService implements OnInit {
    private env;
    cognitoUser: any;
    private poolData;
    private userPool;
    ngOnInit(): void;
    constructor(sessionService: SessionService, env: any);
    signup(username: string, password: string, name: string): Observable<CodeDeliveryDetailsType>;
    signin(username: string, password: string): Observable<any>;
    signOut(username: string): void;
    forgotPassword(username: string): Observable<CodeDeliveryDetailsType>;
    changePassword(username: string, oldpassword: string, password: string): Observable<CodeDeliveryDetailsType>;
    isLoggedIn(): boolean;
    getAuthenticatedUser(): CognitoUser;
}
