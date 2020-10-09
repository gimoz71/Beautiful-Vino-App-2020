import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../../components/auth/auth.component';
import { BVAuthorizationService, BVCommonService, RichiesteService, Utente } from 'bvino-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSessionService } from '../../services/appsession/appSession.service';
import { ThemeChangerService } from 'src/app/services/themeChanger/themechanger.service';
import { AlertService } from '../../services/alert/alert.service';
import { ColorChangeCommunicationService } from '../../services/colorChangeCommunication/colorchangecommunication.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.page.html',
  styleUrls: ['./cambio-password.page.scss'],
})
export class CambioPasswordPage extends AuthComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public username = '';
  public vecchiapassword = '';
  public nuovapassword = '';

  constructor(
    public authService: BVAuthorizationService,
    public router: Router,
    public appSessionService: AppSessionService,
    public alertService: AlertService,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    public themeChanger: ThemeChangerService,
    public colorChangeComm: ColorChangeCommunicationService,
    public loaderService: LoaderService,
    private route: ActivatedRoute) {
    super(router, alertService, appSessionService, commonService, richiesteService, authService, colorChangeComm, loaderService);
 }

  ngOnInit() {
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(params => {
      this.username = params.username as string;
    });
  }

  public cambia() {
    this.cambioPassword(this.username, this.vecchiapassword, this.nuovapassword);
  }

}
