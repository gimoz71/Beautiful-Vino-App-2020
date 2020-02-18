import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    registerColor = '#462B35';

    firstColor = '#e51d70';
    secondColor = '#f9da2c';


    constructor() { }

    ngOnInit() {
    }

}
