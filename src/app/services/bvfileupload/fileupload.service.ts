import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environmentkeys';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private Folder = 'test-immagini-upload';

  private uploadSubject: Subject<string> = new Subject<string>();
  public uploadObservable = this.uploadSubject.asObservable();

  private options: CameraOptions = {
    targetWidth: 384,
    targetHeight: 384,
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  public setProfilePhoto(name, sourceType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.options.sourceType = sourceType;
      this.camera.getPicture(this.options).then((res) => {
        const base64Image = 'data:image/jpeg;base64,' + res;
        resolve(base64Image);
      }).catch((err) => {
        reject(err);
      });
    });
  }


  public upload(file: any, subFolder: string) {
    return new Promise((resolve, reject) => {

      const date = new Date();
      const filename = date.getTime();

      const split = file.split(',');
      const fileContent = split[1];
      const split2 = split[0].split(';');
      const encoding = split2[1];
      const split3 = split2[0].split(':');
      const contentType = split3[1];
      const split4 = split3[1].split('/');
      const estensione = split4[1];

      const bucket = new S3(
        {
          accessKeyId: environment.AWS_UPLOADBUCKET_ACCESS_KEY,
          secretAccessKey: environment.AWS_UPLOADBUCKET_SECRETACCESS_KEY,
          region: 'eu-central-1'
        }
      );
      const buf = Buffer.from(fileContent, 'base64');
      const params = {
        Bucket: 'beautifulvino2020-immagini',
        Key: this.Folder + '/' + subFolder + '/' + filename + '.' + estensione,
        Body: buf,
        ACL: 'public-read',
        ContentType: contentType,
        ContentEncoding: encoding
      };
      const baseUrl = 'https://' + params.Bucket + '.s3.eu-central-1.amazonaws.com/' + params.Key;

      console.log('bucket: ' + params.Bucket);
      console.log('key: ' + params.Key);
      console.log('content type: ' + params.ContentType);
      console.log('content encoding: ' + params.ContentEncoding);
      console.log('baseUrl: ' + baseUrl);

      const self = this;
      bucket.upload(params, function (err, data) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          self.uploadSubject.next('ERR');
          reject(err);
        } else {
          self.uploadSubject.next(baseUrl);
          console.log('Salvato: ' + baseUrl);
          resolve(baseUrl);
        }
      });
    });

    // for upload progress
    /*  bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
        }).send(function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    */
  }
}
