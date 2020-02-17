import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioEventoPage } from './dettaglio-evento.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioEventoPageRoutingModule {}
