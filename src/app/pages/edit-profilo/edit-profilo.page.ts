import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profilo',
  templateUrl: './edit-profilo.page.html',
  styleUrls: ['./edit-profilo.page.scss'],
})
export class EditProfiloPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
