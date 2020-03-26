import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcquistaeventoPageRoutingModule } from './acquistaevento-routing.module';

import { AcquistaeventoPage } from './acquistaevento.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcquistaeventoPageRoutingModule,
    PipesModule
  ],
  declarations: [AcquistaeventoPage]
})
export class AcquistaeventoPageModule { }
