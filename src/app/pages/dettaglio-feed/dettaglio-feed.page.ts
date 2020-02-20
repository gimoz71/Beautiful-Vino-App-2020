import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-feed',
  templateUrl: './dettaglio-feed.page.html',
  styleUrls: ['./dettaglio-feed.page.scss'],
})
export class DettaglioFeedPage implements OnInit {

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
