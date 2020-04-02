import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { Platform, MenuController, Nav, NavController, AlertController, ToastController } from 'ionic-angular';


@Injectable()
export class LoaderService {

    public loading;

    constructor(
        private loadingController: LoadingController) {
    }

    public async presentLoader(loaderMessage: string) {
        this.loading = await this.loadingController.create({
            message: loaderMessage,
            duration: 10000
        });
        await this.loading.present();
    }

    public async dismissLoader() {
        this.loading.dismiss();
    }

}
