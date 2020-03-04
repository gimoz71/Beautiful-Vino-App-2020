import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {

  public loginImages = 'url(https://www.stockvault.net/data/2019/08/28/268829/preview16.jpg)';

  constructor(
    public router: Router,
    public alertService: AlertService
  ) {
    super(router, alertService);
  }

  ngOnInit() {
  }

  public goToLogin() {
    this.goToPage('login');
  }

}
