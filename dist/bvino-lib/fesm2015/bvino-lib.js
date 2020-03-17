import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { __awaiter } from 'tslib';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpBackend, HttpClientModule } from '@angular/common/http';
import { Injectable, Inject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * servizio di sessione contenente una mappa che consente di scambiare informazioni nella sessione
 * questo servizio si occupa anche di gestire la persistenza delle informazioni a livello di cookies
 *
 */
class SessionService {
    constructor() {
        this.sessionMap = new Map();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.sessionMap.set(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.sessionMap.get(key);
    }
    /**
     * @return {?}
     */
    clearSession() {
        this.sessionMap.clear();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    deleteKey(key) {
        this.sessionMap.delete(key);
    }
}
SessionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SessionService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const poolData = {
    UserPoolId: 'eu-central-1_KzlMv3BwL',
    ClientId: '25i6sfibl4qqqk2g8vgsmtsth7'
};
/** @type {?} */
const userPool = new CognitoUserPool(poolData);
class BVAuthorizationService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertService {
    /**
     * @param {?} router
     * @param {?} toastrService
     */
    constructor(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentAlert(alertMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            this.toastrService.success(alertMessage);
        });
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentErrorAlert(alertMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            this.toastrService.error(alertMessage);
        });
    }
}
AlertService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertService.ctorParameters = () => [
    { type: Router },
    { type: ToastrService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BVHttpService {
    /**
     * @param {?} http
     * @param {?} backEnd
     * @param {?} env
     */
    constructor(http, backEnd, env) {
        this.http = http;
        this.backEnd = backEnd;
        this.env = env;
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    post(path, request) {
        return this.http.post(this.env.baseAppUrlGet
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postPut(path, request) {
        return this.http.post(this.env.baseAppUrlPut
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postNotifica(path, request) {
        return this.http.post(this.env.baseAppUrlNotifica
            + this.env.pathSeparator
            + path, request);
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    postConnect(path, request) {
        return this.http.post(this.env.baseAppUrlConnect
            + this.env.pathSeparator
            + path, request);
    }
}
BVHttpService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVHttpService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpBackend },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RichiestaGetGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RichiestaPutGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RichiestaNotificaGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RichiestaConnectGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RichiesteService {
    /**
     * @param {?} env
     */
    constructor(env) {
        this.env = env;
    }
    // -------- GET --------
    /**
     * @return {?}
     */
    getRichiestaGetUtenti() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetUtentiAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @return {?}
     */
    getRichiestaGetUtente(idUtente) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtenteFunctionName;
        richiesta.idUtente = idUtente;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetAziende() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendeFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetBadges() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getBadgesFunctionName;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetEventi() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiFunctionName;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetEventiAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    }
    /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    getRichiestaGetEventoUtente(idEvento, dataEvento, idUtente) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        richiesta.idUtente = idUtente;
        richiesta.dataEvento = dataEvento;
        return richiesta;
    }
    /**
     * @param {?} idEvento
     * @return {?}
     */
    getRichiestaGetEvento(idEvento) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetProvincie() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getProvincieFunctionName;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetFeed() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetFeedAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    }
    /**
     * @return {?}
     */
    getRichiestaGetVini() {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getViniFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idVino
     * @return {?}
     */
    getRichiestaGetVino(idVino) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getVinoFunctionName;
        richiesta.idVino = idVino;
        return richiesta;
    }
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    getRichiestaGetViniAzienda(idAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.idAzienda = idAzienda;
        richiesta.functionName = this.env.getViniAziendaFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    getRichiestaGetProfiloAzienda(idProfiloAzienda) {
        /** @type {?} */
        const richiesta = new RichiestaGetGenerica();
        richiesta.idProfiloAzienda = idProfiloAzienda;
        richiesta.functionName = this.env.getProfiloAziendaFunctionName;
        return richiesta;
    }
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    getRichiestaPutImmagine(file, filename, tipoEntita) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.base64Image = file;
        richiesta.filename = filename;
        richiesta.tipoEntita = tipoEntita;
        richiesta.functionName = this.env.putImmaginiFunctionName;
        return richiesta;
    }
    /**
     * @param {?} provincia
     * @return {?}
     */
    getRichiestaPutProvincia(provincia) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putProvinciaFunctionName;
        richiesta.provincia = provincia;
        return richiesta;
    }
    /**
     * @param {?} utente
     * @return {?}
     */
    getRichiestaPutUtente(utente) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUtenteFunctionName;
        richiesta.utente = utente;
        return richiesta;
    }
    /**
     * @param {?} evento
     * @return {?}
     */
    getRichiestaPutEvento(evento) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putEventoFunctionName;
        richiesta.evento = evento;
        return richiesta;
    }
    /**
     * @param {?} feed
     * @return {?}
     */
    getRichiestaPutFeed(feed) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putFeedFunctionName;
        richiesta.feed = feed;
        return richiesta;
    }
    /**
     * @param {?} vino
     * @return {?}
     */
    getRichiestaPutVino(vino) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putVinoFunctionName;
        richiesta.vino = vino;
        return richiesta;
    }
    /**
     * @param {?} utente
     * @return {?}
     */
    getRichiestaPutuserProfileWithImage(utente) {
        /** @type {?} */
        const richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUserProfileImageWithUserFunctionName;
        richiesta.utente = utente;
        return richiesta;
    }
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    getRichiestaNotifica(messaggio) {
        /** @type {?} */
        const richiesta = new RichiestaNotificaGenerica();
        richiesta.messaggio = messaggio;
        return richiesta;
    }
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaAggiungiEventoAPreferiti(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'P';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaAcquistaEvento(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'A';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    }
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    getRichiestaRimuoviEventoDaPreferiti(idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        const richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'D';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    }
}
RichiesteService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RichiesteService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BvinoLibModule {
    /**
     * @param {?} environment
     * @return {?}
     */
    static forRoot(environment) {
        return {
            ngModule: BvinoLibModule,
            providers: [
                {
                    provide: 'env',
                    // you can also use InjectionToken
                    useValue: environment
                }
            ],
        };
    }
}
BvinoLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    HttpClientModule,
                    BrowserAnimationsModule,
                    ToastrModule.forRoot() // ToastrModule added
                ],
                providers: [
                    BVAuthorizationService,
                    SessionService,
                    AlertService,
                    BVHttpService,
                    RichiesteService
                ],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BVCommonService {
    /**
     * @param {?} httpService
     * @param {?} env
     */
    constructor(httpService, env) {
        this.httpService = httpService;
        this.env = env;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    putNotifica(request) {
        return this.httpService.postNotifica(this.env.notificationServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    put(request) {
        return this.httpService.postPut(this.env.putServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    get(request) {
        return this.httpService.post(this.env.getServiceName, request);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    connect(request) {
        return this.httpService.postConnect(this.env.connectServiceName, request);
    }
}
BVCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BVCommonService.ctorParameters = () => [
    { type: BVHttpService },
    { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessToken {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessTokenPayload {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AwsToken {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IdToken {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IdTokenPayload {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RefreshToken {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AziendaUtente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgeUtente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventoUtente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Utente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtenteUtente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VinoUtente {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Azienda {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventoAzienda {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VinoAzienda {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AziendaVino {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventoVino {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtenteVino {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Vino {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AziendaEvento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgeEvento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Evento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProvinciaEvento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtenteEvento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VinoEvento {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AziendaFeed {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AziendaVinoFeed {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventoFeed {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Feed {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VinoFeed {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Badge {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RispostaGetGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RispostaPutGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RispostaNotificaGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RispostaConnectGenerica {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Provincia {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfiloAzienda {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BvinoLibModule, BVAuthorizationService, SessionService, BVHttpService, RichiesteService, AlertService, BVCommonService, AccessToken, AccessTokenPayload, AwsToken, IdToken, IdTokenPayload, RefreshToken, AziendaUtente, BadgeUtente, EventoUtente, Utente, UtenteUtente, VinoUtente, Azienda, EventoAzienda, VinoAzienda, AziendaVino, EventoVino, UtenteVino, Vino, AziendaEvento, BadgeEvento, Evento, ProvinciaEvento, UtenteEvento, VinoEvento, AziendaFeed, AziendaVinoFeed, EventoFeed, Feed, VinoFeed, Badge, RichiestaGetGenerica, RispostaGetGenerica, RichiestaPutGenerica, RispostaPutGenerica, RichiestaNotificaGenerica, RispostaNotificaGenerica, RichiestaConnectGenerica, RispostaConnectGenerica, Provincia, ProfiloAzienda };

//# sourceMappingURL=bvino-lib.js.map