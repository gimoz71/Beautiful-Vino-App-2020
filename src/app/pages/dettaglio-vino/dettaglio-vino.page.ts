import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-vino',
  templateUrl: './dettaglio-vino.page.html',
  styleUrls: ['./dettaglio-vino.page.scss'],
})
export class DettaglioVinoPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
