import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FileuploadComponent } from './fileupload.component';
import { RouterModule } from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ],
    declarations: [FileuploadComponent],
    exports: [FileuploadComponent],
    providers: [
        File,
        WebView,
        FilePath
    ]
})
export class FileuploadModule { }
