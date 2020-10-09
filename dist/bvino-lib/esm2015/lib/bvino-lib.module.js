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
import { ConstantsService } from './services/common/constants.service';
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
                    RichiesteService,
                    ConstantsService
                ],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZpbm8tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9idmluby1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFtQnZFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUs7O29CQUNkLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTVCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQjtpQkFDN0M7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtvQkFDdEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQlZBdXRob3JpemF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC9CVkF1dGhvcml6YXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IEJWSHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9idmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmljaGllc3RlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCAvLyByZXF1aXJlZCBhbmltYXRpb25zIG1vZHVsZVxuICAgIFRvYXN0ck1vZHVsZS5mb3JSb290KCkgLy8gVG9hc3RyTW9kdWxlIGFkZGVkXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEJWQXV0aG9yaXphdGlvblNlcnZpY2UsXG4gICAgU2Vzc2lvblNlcnZpY2UsXG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEJWSHR0cFNlcnZpY2UsXG4gICAgUmljaGllc3RlU2VydmljZSxcbiAgICBDb25zdGFudHNTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJ2aW5vTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnZpbm9MaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdlbnYnLCAvLyB5b3UgY2FuIGFsc28gdXNlIEluamVjdGlvblRva2VuXG4gICAgICAgICAgdXNlVmFsdWU6IGVudmlyb25tZW50XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19