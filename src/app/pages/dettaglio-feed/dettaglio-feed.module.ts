import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioFeedPageRoutingModule } from './dettaglio-feed-routing.module';

import { DettaglioFeedPage } from './dettaglio-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioFeedPageRoutingModule
  ],
  declarations: [DettaglioFeedPage]
})
export class DettaglioFeedPageModule {}
