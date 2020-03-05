/**
 * servizio di sessione contenente una mappa che consente di scambiare informazioni nella sessione
 * questo servizio si occupa anche di gestire la persistenza delle informazioni a livello di cookies
 *
 */
export declare class SessionService {
    private sessionMap;
    constructor();
    set(key: string, value: string): void;
    get(key: string): string;
    clearSession(): void;
    deleteKey(key: string): void;
}
