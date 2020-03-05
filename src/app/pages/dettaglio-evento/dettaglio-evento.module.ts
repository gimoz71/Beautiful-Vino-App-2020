import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioEventoPageRoutingModule } from './dettaglio-evento-routing.module';

import { DettaglioEventoPage } from './dettaglio-evento.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MapsModule } from 'src/app/components/maps/maps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioEventoPageRoutingModule,
    PipesModule,
    MapsModule
  ],
  declarations: [DettaglioEventoPage]
})
export class DettaglioEventoPageModule { }
