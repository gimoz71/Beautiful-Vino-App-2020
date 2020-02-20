import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-evento',
  templateUrl: './dettaglio-evento.page.html',
  styleUrls: ['./dettaglio-evento.page.scss'],
})
export class DettaglioEventoPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
