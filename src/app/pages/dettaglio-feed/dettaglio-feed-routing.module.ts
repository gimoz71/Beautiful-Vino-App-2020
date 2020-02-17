import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioFeedPage } from './dettaglio-feed.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioFeedPageRoutingModule {}
