import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scopri',
  templateUrl: './scopri.page.html',
  styleUrls: ['./scopri.page.scss'],
})
export class ScopriPage implements OnInit {

    constructor(
        private router: Router
  ) { }

  ngOnInit() {
  }

}
