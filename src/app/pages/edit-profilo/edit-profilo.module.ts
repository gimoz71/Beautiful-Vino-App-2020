import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfiloPageRoutingModule } from './edit-profilo-routing.module';

import { EditProfiloPage } from './edit-profilo.page';
import { FileuploadModule } from 'src/app/components/fileupload/fileupload.module';

import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfiloPageRoutingModule,
    FileuploadModule
  ],
  declarations: [EditProfiloPage],
  providers: [
    Camera
  ]
})
export class EditProfiloPageModule { }
