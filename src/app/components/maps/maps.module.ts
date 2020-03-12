import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MapsComponent } from './maps.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environmentkeys';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgmCoreModule.forRoot({
            apiKey: environment.GOOGLE_MAP_API_KEY,
            libraries: ['places']
        })
    ],
    declarations: [MapsComponent],
    exports: [MapsComponent]
})
export class MapsModule { }
