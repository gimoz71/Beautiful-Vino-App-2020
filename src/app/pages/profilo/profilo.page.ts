import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],

})
export class ProfiloPage implements OnInit {

    constructor(
        private router: Router
    ) { }

  ngOnInit() {
  }

}
