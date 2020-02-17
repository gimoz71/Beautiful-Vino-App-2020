import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfiloPage } from './edit-profilo.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfiloPageRoutingModule {}
