import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { __awaiter, __generator } from 'tslib';
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
var SessionService = /** @class */ (function () {
    function SessionService() {
        this.sessionMap = new Map();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SessionService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.sessionMap.set(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.sessionMap.get(key);
    };
    /**
     * @return {?}
     */
    SessionService.prototype.clearSession = /**
     * @return {?}
     */
    function () {
        this.sessionMap.clear();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.deleteKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.sessionMap.delete(key);
    };
    SessionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionService.ctorParameters = function () { return []; };
    return SessionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertService = /** @class */ (function () {
    function AlertService(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.toastrService.success(alertMessage);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentErrorAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.toastrService.error(alertMessage);
                return [2 /*return*/];
            });
        });
    };
    AlertService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertService.ctorParameters = function () { return [
        { type: Router },
        { type: ToastrService }
    ]; };
    return AlertService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BVHttpService = /** @class */ (function () {
    function BVHttpService(http, backEnd, env) {
        this.http = http;
        this.backEnd = backEnd;
        this.env = env;
    }
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.post = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlGet
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postPut = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlPut
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postNotifica = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlNotifica
            + this.env.pathSeparator
            + path, request);
    };
    /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    BVHttpService.prototype.postConnect = /**
     * @param {?} path
     * @param {?} request
     * @return {?}
     */
    function (path, request) {
        return this.http.post(this.env.baseAppUrlConnect
            + this.env.pathSeparator
            + path, request);
    };
    BVHttpService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVHttpService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpBackend },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return BVHttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RichiestaGetGenerica = /** @class */ (function () {
    function RichiestaGetGenerica() {
    }
    return RichiestaGetGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RichiestaPutGenerica = /** @class */ (function () {
    function RichiestaPutGenerica() {
    }
    return RichiestaPutGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RichiestaNotificaGenerica = /** @class */ (function () {
    function RichiestaNotificaGenerica() {
    }
    return RichiestaNotificaGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RichiestaConnectGenerica = /** @class */ (function () {
    function RichiestaConnectGenerica() {
    }
    return RichiestaConnectGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RichiesteService = /** @class */ (function () {
    function RichiesteService(env) {
        this.env = env;
    }
    // -------- GET --------
    // -------- GET --------
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtenti = 
    // -------- GET --------
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtentiAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtentiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetUtente = /**
     * @param {?} idUtente
     * @return {?}
     */
    function (idUtente) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getUtenteFunctionName;
        richiesta.idUtente = idUtente;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetAziende = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendeFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetBadges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getBadgesFunctionName;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventi = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiFunctionName;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventiAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventiAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        richiesta.idUtente = '';
        richiesta.elencoCompleto = 'S';
        return richiesta;
    };
    /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEventoUtente = /**
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} idUtente
     * @return {?}
     */
    function (idEvento, dataEvento, idUtente) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        richiesta.idUtente = idUtente;
        richiesta.dataEvento = dataEvento;
        return richiesta;
    };
    /**
     * @param {?} idEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetEvento = /**
     * @param {?} idEvento
     * @return {?}
     */
    function (idEvento) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getEventoFunctionName;
        richiesta.idEvento = idEvento;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetProvincie = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getProvincieFunctionName;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetFeed = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetFeedAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getFeedAziendaFunctionName;
        richiesta.idAzienda = idAzienda;
        return richiesta;
    };
    /**
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetVini = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getViniFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idVino
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetVino = /**
     * @param {?} idVino
     * @return {?}
     */
    function (idVino) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.functionName = this.env.getVinoFunctionName;
        richiesta.idVino = idVino;
        return richiesta;
    };
    /**
     * @param {?} idAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetViniAzienda = /**
     * @param {?} idAzienda
     * @return {?}
     */
    function (idAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.idAzienda = idAzienda;
        richiesta.functionName = this.env.getViniAziendaFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaGetProfiloAzienda = /**
     * @param {?} idProfiloAzienda
     * @return {?}
     */
    function (idProfiloAzienda) {
        /** @type {?} */
        var richiesta = new RichiestaGetGenerica();
        richiesta.idProfiloAzienda = idProfiloAzienda;
        richiesta.functionName = this.env.getProfiloAziendaFunctionName;
        return richiesta;
    };
    // -------- PUT --------
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutImmagine = 
    // -------- PUT --------
    /**
     * @param {?} file
     * @param {?} filename
     * @param {?} tipoEntita
     * @return {?}
     */
    function (file, filename, tipoEntita) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.base64Image = file;
        richiesta.filename = filename;
        richiesta.tipoEntita = tipoEntita;
        richiesta.functionName = this.env.putImmaginiFunctionName;
        return richiesta;
    };
    /**
     * @param {?} provincia
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutProvincia = /**
     * @param {?} provincia
     * @return {?}
     */
    function (provincia) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putProvinciaFunctionName;
        richiesta.provincia = provincia;
        return richiesta;
    };
    /**
     * @param {?} utente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutUtente = /**
     * @param {?} utente
     * @return {?}
     */
    function (utente) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUtenteFunctionName;
        richiesta.utente = utente;
        return richiesta;
    };
    /**
     * @param {?} evento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutEvento = /**
     * @param {?} evento
     * @return {?}
     */
    function (evento) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putEventoFunctionName;
        richiesta.evento = evento;
        return richiesta;
    };
    /**
     * @param {?} feed
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutFeed = /**
     * @param {?} feed
     * @return {?}
     */
    function (feed) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putFeedFunctionName;
        richiesta.feed = feed;
        return richiesta;
    };
    /**
     * @param {?} vino
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutVino = /**
     * @param {?} vino
     * @return {?}
     */
    function (vino) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putVinoFunctionName;
        richiesta.vino = vino;
        return richiesta;
    };
    /**
     * @param {?} utente
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaPutuserProfileWithImage = /**
     * @param {?} utente
     * @return {?}
     */
    function (utente) {
        /** @type {?} */
        var richiesta = new RichiestaPutGenerica();
        richiesta.functionName = this.env.putUserProfileImageWithUserFunctionName;
        richiesta.utente = utente;
        return richiesta;
    };
    // -------- NOTIFICATION --------
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaNotifica = 
    // -------- NOTIFICATION --------
    /**
     * @param {?} messaggio
     * @return {?}
     */
    function (messaggio) {
        /** @type {?} */
        var richiesta = new RichiestaNotificaGenerica();
        richiesta.messaggio = messaggio;
        return richiesta;
    };
    // -------- CONNECT --------
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAggiungiEventoAPreferiti = 
    // -------- CONNECT --------
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'P';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} dataPrenotazioneEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaAcquistaEvento = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} dataPrenotazioneEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, dataPrenotazioneEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.dataPrenotazioneEvento = dataPrenotazioneEvento;
        richiesta.statoEvento = 'A';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    RichiesteService.prototype.getRichiestaRimuoviEventoDaPreferiti = /**
     * @param {?} idUtente
     * @param {?} idEvento
     * @param {?} dataEvento
     * @param {?} statoPreferitoEvento
     * @param {?} statoAcquistatoEvento
     * @return {?}
     */
    function (idUtente, idEvento, dataEvento, statoPreferitoEvento, statoAcquistatoEvento) {
        /** @type {?} */
        var richiesta = new RichiestaConnectGenerica();
        richiesta.idUtente = idUtente;
        richiesta.idEvento = idEvento;
        richiesta.dataEvento = dataEvento;
        richiesta.statoEvento = 'D';
        richiesta.statoPreferitoEvento = statoPreferitoEvento;
        richiesta.statoAcquistatoEvento = statoAcquistatoEvento;
        richiesta.functionName = this.env.connectEventoAUtenteFunctionName;
        return richiesta;
    };
    RichiesteService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RichiesteService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return RichiesteService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BvinoLibModule = /** @class */ (function () {
    function BvinoLibModule() {
    }
    /**
     * @param {?} environment
     * @return {?}
     */
    BvinoLibModule.forRoot = /**
     * @param {?} environment
     * @return {?}
     */
    function (environment) {
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
    };
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
    return BvinoLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BVCommonService = /** @class */ (function () {
    function BVCommonService(httpService, env) {
        this.httpService = httpService;
        this.env = env;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.putNotifica = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postNotifica(this.env.notificationServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.put = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postPut(this.env.putServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.get = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.post(this.env.getServiceName, request);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    BVCommonService.prototype.connect = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpService.postConnect(this.env.connectServiceName, request);
    };
    BVCommonService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BVCommonService.ctorParameters = function () { return [
        { type: BVHttpService },
        { type: undefined, decorators: [{ type: Inject, args: ['env',] }] }
    ]; };
    return BVCommonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessToken = /** @class */ (function () {
    function AccessToken() {
    }
    return AccessToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessTokenPayload = /** @class */ (function () {
    function AccessTokenPayload() {
    }
    return AccessTokenPayload;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AwsToken = /** @class */ (function () {
    function AwsToken() {
    }
    return AwsToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IdToken = /** @class */ (function () {
    function IdToken() {
    }
    return IdToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IdTokenPayload = /** @class */ (function () {
    function IdTokenPayload() {
    }
    return IdTokenPayload;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RefreshToken = /** @class */ (function () {
    function RefreshToken() {
    }
    return RefreshToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AziendaUtente = /** @class */ (function () {
    function AziendaUtente() {
    }
    return AziendaUtente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BadgeUtente = /** @class */ (function () {
    function BadgeUtente() {
    }
    return BadgeUtente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventoUtente = /** @class */ (function () {
    function EventoUtente() {
    }
    return EventoUtente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Utente = /** @class */ (function () {
    function Utente() {
    }
    return Utente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtenteUtente = /** @class */ (function () {
    function UtenteUtente() {
    }
    return UtenteUtente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VinoUtente = /** @class */ (function () {
    function VinoUtente() {
    }
    return VinoUtente;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Azienda = /** @class */ (function () {
    function Azienda() {
    }
    return Azienda;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventoAzienda = /** @class */ (function () {
    function EventoAzienda() {
    }
    return EventoAzienda;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VinoAzienda = /** @class */ (function () {
    function VinoAzienda() {
    }
    return VinoAzienda;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AziendaVino = /** @class */ (function () {
    function AziendaVino() {
    }
    return AziendaVino;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventoVino = /** @class */ (function () {
    function EventoVino() {
    }
    return EventoVino;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtenteVino = /** @class */ (function () {
    function UtenteVino() {
    }
    return UtenteVino;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Vino = /** @class */ (function () {
    function Vino() {
    }
    return Vino;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AziendaEvento = /** @class */ (function () {
    function AziendaEvento() {
    }
    return AziendaEvento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BadgeEvento = /** @class */ (function () {
    function BadgeEvento() {
    }
    return BadgeEvento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Evento = /** @class */ (function () {
    function Evento() {
    }
    return Evento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProvinciaEvento = /** @class */ (function () {
    function ProvinciaEvento() {
    }
    return ProvinciaEvento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtenteEvento = /** @class */ (function () {
    function UtenteEvento() {
    }
    return UtenteEvento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VinoEvento = /** @class */ (function () {
    function VinoEvento() {
    }
    return VinoEvento;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AziendaFeed = /** @class */ (function () {
    function AziendaFeed() {
    }
    return AziendaFeed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AziendaVinoFeed = /** @class */ (function () {
    function AziendaVinoFeed() {
    }
    return AziendaVinoFeed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventoFeed = /** @class */ (function () {
    function EventoFeed() {
    }
    return EventoFeed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Feed = /** @class */ (function () {
    function Feed() {
    }
    return Feed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VinoFeed = /** @class */ (function () {
    function VinoFeed() {
    }
    return VinoFeed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Badge = /** @class */ (function () {
    function Badge() {
    }
    return Badge;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RispostaGetGenerica = /** @class */ (function () {
    function RispostaGetGenerica() {
    }
    return RispostaGetGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RispostaPutGenerica = /** @class */ (function () {
    function RispostaPutGenerica() {
    }
    return RispostaPutGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RispostaNotificaGenerica = /** @class */ (function () {
    function RispostaNotificaGenerica() {
    }
    return RispostaNotificaGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RispostaConnectGenerica = /** @class */ (function () {
    function RispostaConnectGenerica() {
    }
    return RispostaConnectGenerica;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Provincia = /** @class */ (function () {
    function Provincia() {
    }
    return Provincia;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfiloAzienda = /** @class */ (function () {
    function ProfiloAzienda() {
    }
    return ProfiloAzienda;
}());

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