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
export { BvinoLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZpbm8tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9idmluby1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkU7SUFBQTtJQTRCQSxDQUFDOzs7OztJQVhRLHNCQUFPOzs7O0lBQWQsVUFBZSxXQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxLQUFLOztvQkFDZCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkEzQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUI7cUJBQzdDO29CQUNELFNBQVMsRUFBRTt3QkFDVCxzQkFBc0I7d0JBQ3RCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7O0lBYUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQVpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQlZBdXRob3JpemF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC9CVkF1dGhvcml6YXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IEJWSHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9idmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmljaGllc3RlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL3JpY2hpZXN0ZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIC8vIHJlcXVpcmVkIGFuaW1hdGlvbnMgbW9kdWxlXG4gICAgVG9hc3RyTW9kdWxlLmZvclJvb3QoKSAvLyBUb2FzdHJNb2R1bGUgYWRkZWRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQlZBdXRob3JpemF0aW9uU2VydmljZSxcbiAgICBTZXNzaW9uU2VydmljZSxcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQlZIdHRwU2VydmljZSxcbiAgICBSaWNoaWVzdGVTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJ2aW5vTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnZpbm9MaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdlbnYnLCAvLyB5b3UgY2FuIGFsc28gdXNlIEluamVjdGlvblRva2VuXG4gICAgICAgICAgdXNlVmFsdWU6IGVudmlyb25tZW50XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19