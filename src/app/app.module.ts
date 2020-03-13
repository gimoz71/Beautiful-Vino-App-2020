import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  SessionService,
  BVAuthorizationService,
  BVHttpService,
  RichiesteService,
  BVCommonService,
  BvinoLibModule
} from 'bvino-lib';
import { AppSessionService } from './services/appsession/appSession.service';
import { ThemeChangerService } from './services/themeChanger/themechanger.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogoutCommunicationService } from './services/logoutCommunication/logoutcommunication.service';
import { BVHttpInterceptor } from './interceptors/http.inteceptor';
import { AlertService } from './services/alert/alert.service';
import { environment } from 'src/environments/environmentkeys';
import { PipesModule } from './pipes/pipes.module';

import { MapsModule } from './components/maps/maps.module';


import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { FileuploadModule } from './components/fileupload/fileupload.module';
import { StoreService } from './services/store/store.service';
import { ColorChangeCommunicationService } from './services/colorChangeCommunication/colorchangecommunication.service';
import { FileuploadService } from './services/bvfileupload/fileupload.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BvinoLibModule.forRoot(environment),
    PipesModule,
    MapsModule,
    FileuploadModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SessionService,
    BVAuthorizationService,
    AppSessionService,
    AlertService,
    BVHttpService,
    RichiesteService,
    BVCommonService,
    LogoutCommunicationService,
    ColorChangeCommunicationService,
    ThemeChangerService,
    Camera,
    StoreService,
    FileuploadService,
    File,
    WebView,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BVHttpInterceptor,
      multi: true
    }
  ],
  exports: [
    PipesModule,
    MapsModule,
    FileuploadModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
