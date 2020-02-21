import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dettaglio-azienda',
    templateUrl: './dettaglio-azienda.page.html',
    styleUrls: ['./dettaglio-azienda.page.scss'],
})
export class DettaglioAziendaPage implements OnInit {

    // riportare nel base

    scrollTop = 150;
    showNav = false;

    onScroll(event) {
        this.showNav = this.scrollTop < event.target.scrollTop;
        // this.scrollTop = event.target.scrollTop; <-- commentato perchè refresha il valore di scrolltop
    }
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

}
