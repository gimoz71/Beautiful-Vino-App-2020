import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dettaglio-vino',
    templateUrl: './dettaglio-vino.page.html',
    styleUrls: ['./dettaglio-vino.page.scss'],
})
export class DettaglioVinoPage implements OnInit {

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
