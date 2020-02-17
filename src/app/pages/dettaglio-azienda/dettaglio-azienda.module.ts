import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioAziendaPageRoutingModule } from './dettaglio-azienda-routing.module';

import { DettaglioAziendaPage } from './dettaglio-azienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioAziendaPageRoutingModule
  ],
  declarations: [DettaglioAziendaPage]
})
export class DettaglioAziendaPageModule {}
