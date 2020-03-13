(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('amazon-cognito-identity-js'), require('rxjs'), require('@angular/platform-browser/animations'), require('ngx-toastr'), require('@angular/router'), require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('bvino-lib', ['exports', 'amazon-cognito-identity-js', 'rxjs', '@angular/platform-browser/animations', 'ngx-toastr', '@angular/router', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['bvino-lib'] = {}),global.amazonCognitoIdentityJs,global.rxjs,global.ng.platformBrowser.animations,global.ngxToastr,global.ng.router,global.ng.common.http,global.ng.core));
}(this, (function (exports,amazonCognitoIdentityJs,rxjs,animations,ngxToastr,router,http,core) { 'use strict';

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
            { type: core.Injectable }
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
    var userPool = new amazonCognitoIdentityJs.CognitoUserPool(poolData);
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
                var authenticationDetails = new amazonCognitoIdentityJs.AuthenticationDetails(authenticationData);
                /** @type {?} */
                var userData = {
                    Username: username,
                    Pool: userPool
                };
                /** @type {?} */
                var cognitoUser = new amazonCognitoIdentityJs.CognitoUser(userData);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    cognitoUser.authenticateUser(authenticationDetails, {
                        onSuccess: ( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) {
                            observer.next(result);
                            observer.complete();
                        }),
                        onFailure: ( /**
                         * @param {?} err
                         * @return {?}
                         */function (err) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BVAuthorizationService.ctorParameters = function () {
            return [
                { type: SessionService }
            ];
        };
        return BVAuthorizationService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertService = /** @class */ (function () {
        function AlertService(router$$1, toastrService) {
            this.router = router$$1;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AlertService.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: ngxToastr.ToastrService }
            ];
        };
        return AlertService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BVHttpService = /** @class */ (function () {
        function BVHttpService(http$$1, backEnd, env) {
            this.http = http$$1;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BVHttpService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: http.HttpBackend },
                { type: undefined, decorators: [{ type: core.Inject, args: ['env',] }] }
            ];
        };
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
         * @param {?} statoPreferitoEvento
         * @param {?} statoAcquistatoEvento
         * @return {?}
         */
        RichiesteService.prototype.getRichiestaAcquistaEvento = /**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RichiesteService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['env',] }] }
            ];
        };
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
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            http.HttpClientModule,
                            animations.BrowserAnimationsModule,
                            ngxToastr.ToastrModule.forRoot() // ToastrModule added
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BVCommonService.ctorParameters = function () {
            return [
                { type: BVHttpService },
                { type: undefined, decorators: [{ type: core.Inject, args: ['env',] }] }
            ];
        };
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

    exports.BvinoLibModule = BvinoLibModule;
    exports.BVAuthorizationService = BVAuthorizationService;
    exports.SessionService = SessionService;
    exports.BVHttpService = BVHttpService;
    exports.RichiesteService = RichiesteService;
    exports.AlertService = AlertService;
    exports.BVCommonService = BVCommonService;
    exports.AccessToken = AccessToken;
    exports.AccessTokenPayload = AccessTokenPayload;
    exports.AwsToken = AwsToken;
    exports.IdToken = IdToken;
    exports.IdTokenPayload = IdTokenPayload;
    exports.RefreshToken = RefreshToken;
    exports.AziendaUtente = AziendaUtente;
    exports.BadgeUtente = BadgeUtente;
    exports.EventoUtente = EventoUtente;
    exports.Utente = Utente;
    exports.UtenteUtente = UtenteUtente;
    exports.VinoUtente = VinoUtente;
    exports.Azienda = Azienda;
    exports.EventoAzienda = EventoAzienda;
    exports.VinoAzienda = VinoAzienda;
    exports.AziendaVino = AziendaVino;
    exports.EventoVino = EventoVino;
    exports.UtenteVino = UtenteVino;
    exports.Vino = Vino;
    exports.AziendaEvento = AziendaEvento;
    exports.BadgeEvento = BadgeEvento;
    exports.Evento = Evento;
    exports.ProvinciaEvento = ProvinciaEvento;
    exports.UtenteEvento = UtenteEvento;
    exports.VinoEvento = VinoEvento;
    exports.AziendaFeed = AziendaFeed;
    exports.AziendaVinoFeed = AziendaVinoFeed;
    exports.EventoFeed = EventoFeed;
    exports.Feed = Feed;
    exports.VinoFeed = VinoFeed;
    exports.Badge = Badge;
    exports.RichiestaGetGenerica = RichiestaGetGenerica;
    exports.RispostaGetGenerica = RispostaGetGenerica;
    exports.RichiestaPutGenerica = RichiestaPutGenerica;
    exports.RispostaPutGenerica = RispostaPutGenerica;
    exports.RichiestaNotificaGenerica = RichiestaNotificaGenerica;
    exports.RispostaNotificaGenerica = RispostaNotificaGenerica;
    exports.RichiestaConnectGenerica = RichiestaConnectGenerica;
    exports.RispostaConnectGenerica = RispostaConnectGenerica;
    exports.Provincia = Provincia;
    exports.ProfiloAzienda = ProfiloAzienda;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=bvino-lib.umd.js.map