import { OnInit } from '@angular/core';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { SessionService } from '../common/session.service';
export declare class BVAuthorizationService implements OnInit {
    cognitoUser: any;
    ngOnInit(): void;
    constructor(sessionService: SessionService);
    signin(username: string, password: string): Observable<CognitoUserSession>;
    isLoggedIn(): boolean;
    getAuthenticatedUser(): CognitoUser;
}
