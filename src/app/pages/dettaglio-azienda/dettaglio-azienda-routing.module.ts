import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioAziendaPage } from './dettaglio-azienda.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioAziendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioAziendaPageRoutingModule {}
