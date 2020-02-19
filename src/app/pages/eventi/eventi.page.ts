import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage implements OnInit {

    /*firstColor = '#e51d70';
    secondColor = '#f9da2c';*/
  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
