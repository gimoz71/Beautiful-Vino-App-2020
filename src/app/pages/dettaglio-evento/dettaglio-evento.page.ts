import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dettaglio-evento',
    templateUrl: './dettaglio-evento.page.html',
    styleUrls: ['./dettaglio-evento.page.scss'],
})
export class DettaglioEventoPage implements OnInit {

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
