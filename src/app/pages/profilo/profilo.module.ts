import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloPageRoutingModule } from './profilo-routing.module';

import { ProfiloPage } from './profilo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloPageRoutingModule,
    PipesModule
  ],
  declarations: [ProfiloPage]
})
export class ProfiloPageModule { }
