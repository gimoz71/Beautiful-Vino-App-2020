import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { ActionSheetController, Platform, LoadingController } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { AlertService } from 'bvino-lib';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit {

  @Input() thumbImage: string;

  public images = [];

  constructor(
    public alertService: AlertService,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath) { }

  ngOnInit() { }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.alertService.presentAlert('taking picture');
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceTypeI: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceTypeI,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceTypeI === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.alertService.presentAlert('currentName: ' + currentName);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.alertService.presentAlert('updatingStored: ' + newFileName);
      // this.updateStoredImages(newFileName);
    }, error => {
      this.alertService.presentAlert('Error while storing file.');
    });
  }

  // updateStoredImages(nameI: string) {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //     const arr = JSON.parse(images);
  //     if (!arr) {
  //       const newImages = [nameI];
  //       this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
  //     } else {
  //       arr.push(nameI);
  //       this.storage.set(STORAGE_KEY, JSON.stringify(arr));
  //     }

  //     const filePathI = this.file.dataDirectory + nameI;
  //     this.alertService.presentAlert('pathForImage: ' + filePathI);
  //     const resPath = this.pathForImage(filePathI);

  //     const newEntry = {
  //       name: nameI,
  //       path: resPath,
  //       filePath: filePathI
  //     };

  //     this.images = [newEntry, ...this.images];
  //     this.ref.detectChanges(); // trigger change detection cycle
  //   });
  // }

  startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (entry as FileEntry).file(file => this.readFile(file));
      })
      .catch(err => {
        this.alertService.presentAlert('Error while reading file.');
      });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
      message: 'Uploading image...',
    });
    await loading.present();

    // sostituire con metodo upload S3 già usato
    this.http.post('http://localhost:8888/upload.php', formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res['success']) {
          this.alertService.presentAlert('File upload complete.');
        } else {
          this.alertService.presentAlert('File upload failed.');
        }
      });
  }

}
