import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScopriPage } from './scopri.page';

const routes: Routes = [
  {
    path: '',
    component: ScopriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScopriPageRoutingModule {}
