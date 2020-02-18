import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    loginImages = 'url(https://www.stockvault.net/data/2019/08/28/268829/preview16.jpg)';


    constructor() { }

    ngOnInit() {
    }

}
