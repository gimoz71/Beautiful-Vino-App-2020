import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViniPage } from './vini.page';

const routes: Routes = [
  {
    path: '',
    component: ViniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViniPageRoutingModule {}
