import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginImages = 'url(https://www.stockvault.net/data/2019/08/28/268829/preview16.jpg)';

    firstColor = '#e51d70';
    secondColor = '#f9da2c';


  constructor() { }

  ngOnInit() {
  }

}
