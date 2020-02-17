import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioVinoPage } from './dettaglio-vino.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioVinoPageRoutingModule {}
