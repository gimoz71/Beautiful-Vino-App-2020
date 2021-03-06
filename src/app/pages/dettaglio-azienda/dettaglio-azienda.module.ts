import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioAziendaPageRoutingModule } from './dettaglio-azienda-routing.module';

import { DettaglioAziendaPage } from './dettaglio-azienda.page';
import { MapsModule } from 'src/app/components/maps/maps.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioAziendaPageRoutingModule,
    PipesModule,
    MapsModule
  ],
  declarations: [DettaglioAziendaPage]
})
export class DettaglioAziendaPageModule { }
