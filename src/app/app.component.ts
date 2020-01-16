import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public counter = 0;
  toast: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // let status bar overlay webview
      this.statusBar.overlaysWebView(false);
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#617070');
      this.splashScreen.hide();

      this.platform.backButton.subscribe(() => {
        if (this.counter === 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0; }, 3000);
        } else {
          // console.log("exitapp");
          // this.platform.exitApp();
          navigator['app'].exitApp();
        }
      });
    });
  }

  // display the toast message at the bottom of the screen
  presentToast() {
    this.toast = this.toastController.create({
      message: 'Press BACK again to EXIT',
      duration: 3000,
      position: 'bottom'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
