import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-azienda',
  templateUrl: './dettaglio-azienda.page.html',
  styleUrls: ['./dettaglio-azienda.page.scss'],
})
export class DettaglioAziendaPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
