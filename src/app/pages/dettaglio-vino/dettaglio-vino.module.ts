import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioVinoPageRoutingModule } from './dettaglio-vino-routing.module';

import { DettaglioVinoPage } from './dettaglio-vino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioVinoPageRoutingModule
  ],
  declarations: [DettaglioVinoPage]
})
export class DettaglioVinoPageModule {}
