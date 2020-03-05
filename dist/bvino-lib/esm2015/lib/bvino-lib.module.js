/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BVAuthorizationService } from './services/auth/BVAuthorizationService';
import { SessionService } from './services/common/session.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './services/common/alert.service';
import { BVHttpService } from './services/common/bvhttp.service';
import { HttpClientModule } from '@angular/common/http';
import { RichiesteService } from './services/common/richieste.service';
export class BvinoLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZpbm8tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9idmluby1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFrQnZFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7O29CQUNkLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTNCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQjtpQkFDN0M7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtvQkFDdEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJWQXV0aG9yaXphdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgvQlZBdXRob3JpemF0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gJ25neC10b2FzdHInO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBCVkh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vYnZodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJpY2hpZXN0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9yaWNoaWVzdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCAvLyByZXF1aXJlZCBhbmltYXRpb25zIG1vZHVsZVxuICAgIFRvYXN0ck1vZHVsZS5mb3JSb290KCkgLy8gVG9hc3RyTW9kdWxlIGFkZGVkXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEJWQXV0aG9yaXphdGlvblNlcnZpY2UsXG4gICAgU2Vzc2lvblNlcnZpY2UsXG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEJWSHR0cFNlcnZpY2UsXG4gICAgUmljaGllc3RlU2VydmljZVxuICBdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCdmlub0xpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJ2aW5vTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnZW52JywgLy8geW91IGNhbiBhbHNvIHVzZSBJbmplY3Rpb25Ub2tlblxuICAgICAgICAgIHVzZVZhbHVlOiBlbnZpcm9ubWVudFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==