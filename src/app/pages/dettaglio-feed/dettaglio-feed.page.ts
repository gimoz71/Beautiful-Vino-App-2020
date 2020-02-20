import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio-feed',
  templateUrl: './dettaglio-feed.page.html',
  styleUrls: ['./dettaglio-feed.page.scss'],
})
export class DettaglioFeedPage implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

}
