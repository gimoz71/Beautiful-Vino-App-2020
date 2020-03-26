import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquistaeventoPage } from './acquistaevento.page';

const routes: Routes = [
  {
    path: '',
    component: AcquistaeventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcquistaeventoPageRoutingModule {}
