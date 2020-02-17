import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViniPageRoutingModule } from './vini-routing.module';

import { ViniPage } from './vini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViniPageRoutingModule
  ],
  declarations: [ViniPage]
})
export class ViniPageModule {}
