import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dettaglio-feed',
    templateUrl: './dettaglio-feed.page.html',
    styleUrls: ['./dettaglio-feed.page.scss'],
})
export class DettaglioFeedPage implements OnInit {

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
