import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScopriPageRoutingModule } from './scopri-routing.module';

import { ScopriPage } from './scopri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScopriPageRoutingModule
  ],
  declarations: [ScopriPage]
})
export class ScopriPageModule {}
