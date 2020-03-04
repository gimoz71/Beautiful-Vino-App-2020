import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioEventoPageRoutingModule } from './dettaglio-evento-routing.module';

import { DettaglioEventoPage } from './dettaglio-evento.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioEventoPageRoutingModule,
    PipesModule
  ],
  declarations: [DettaglioEventoPage]
})
export class DettaglioEventoPageModule { }
