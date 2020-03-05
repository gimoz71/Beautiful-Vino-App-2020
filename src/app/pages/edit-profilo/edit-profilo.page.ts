import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Utente, BVCommonService, RichiesteService } from 'bvino-lib';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subject } from 'rxjs';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { environment } from 'src/environments/environmentkeys';
import { ActionSheetController, Platform, LoadingController } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-edit-profilo',
  templateUrl: './edit-profilo.page.html',
  styleUrls: ['./edit-profilo.page.scss'],
})
export class EditProfiloPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  scrollTop = 150;
  showNav = false;

  public utente: Utente;
  public reload = false;

  public images = [];

  constructor(
    private route: ActivatedRoute,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone,
    public commonService: BVCommonService,
    public richiesteService: RichiesteService,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private storage: Storage,
    private platform: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath
  ) {
    super(router, alertService);
    this.utente = new Utente();
  }

  ionViewDidEnter() {
    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });

    this.route.queryParams.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(params => {
      this.reload = params.reload === 'true';
      this.utente = JSON.parse(params.utente) as Utente;
    });
  }

  ngOnInit() {
  }

  public salvaUtente() {
    console.log('Salvataggio Utente');
  }

  public profiloUtente() {
    this.goToPage('profilo');
  }


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

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for (const img of arr) {
          const filePathI = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePathI);
          this.images.push({ name: img, path: resPath, filePath: filePathI });
        }
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
      this.updateStoredImages(newFileName);
    }, error => {
      this.alertService.presentAlert('Error while storing file.');
    });
  }

  updateStoredImages(nameI: string) {
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      if (!arr) {
        const newImages = [nameI];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(nameI);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      const filePathI = this.file.dataDirectory + nameI;
      this.alertService.presentAlert('pathForImage: ' + filePathI);
      const resPath = this.pathForImage(filePathI);

      const newEntry = {
        name: nameI,
        path: resPath,
        filePath: filePathI
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

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

  onScroll(event) {
    this.showNav = this.scrollTop < event.target.scrollTop;
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
