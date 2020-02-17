import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfiloPageRoutingModule } from './edit-profilo-routing.module';

import { EditProfiloPage } from './edit-profilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfiloPageRoutingModule
  ],
  declarations: [EditProfiloPage]
})
export class EditProfiloPageModule {}
