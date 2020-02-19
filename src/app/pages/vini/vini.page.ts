import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vini',
  templateUrl: './vini.page.html',
  styleUrls: ['./vini.page.scss'],
})
export class ViniPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
