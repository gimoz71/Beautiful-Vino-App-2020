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
                        RichiesteService,
                        ConstantsService
                    ],
                    exports: []
                },] }
    ];
    return BvinoLibModule;
}());
export { BvinoLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnZpbm8tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J2aW5vLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9idmluby1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkU7SUFBQTtJQTZCQSxDQUFDOzs7OztJQVhRLHNCQUFPOzs7O0lBQWQsVUFBZSxXQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxLQUFLOztvQkFDZCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkE1QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUI7cUJBQzdDO29CQUNELFNBQVMsRUFBRTt3QkFDVCxzQkFBc0I7d0JBQ3RCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtpQkFDWjs7SUFhRCxxQkFBQztDQUFBLEFBN0JELElBNkJDO1NBWlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCVkF1dGhvcml6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoL0JWQXV0aG9yaXphdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQlZIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2J2aHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSaWNoaWVzdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vcmljaGllc3RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIC8vIHJlcXVpcmVkIGFuaW1hdGlvbnMgbW9kdWxlXG4gICAgVG9hc3RyTW9kdWxlLmZvclJvb3QoKSAvLyBUb2FzdHJNb2R1bGUgYWRkZWRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQlZBdXRob3JpemF0aW9uU2VydmljZSxcbiAgICBTZXNzaW9uU2VydmljZSxcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQlZIdHRwU2VydmljZSxcbiAgICBSaWNoaWVzdGVTZXJ2aWNlLFxuICAgIENvbnN0YW50c1NlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQnZpbm9MaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChlbnZpcm9ubWVudDogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCdmlub0xpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ2VudicsIC8vIHlvdSBjYW4gYWxzbyB1c2UgSW5qZWN0aW9uVG9rZW5cbiAgICAgICAgICB1c2VWYWx1ZTogZW52aXJvbm1lbnRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=