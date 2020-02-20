import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-evento',
  templateUrl: './dettaglio-evento.page.html',
  styleUrls: ['./dettaglio-evento.page.scss'],
})
export class DettaglioEventoPage implements OnInit {

    scrollTop = 0;
    showNav = false;

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        this.scrollTop = event.target.scrollTop;
    }
  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
