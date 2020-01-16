import { Component, OnInit } from '@angular/core';
import { PopoverController, ActionSheetController, AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  body: 'Write something good...';
  subject: 'Hello';

  constructor(public popoverController: PopoverController,
              public actionSheetController: ActionSheetController,
              private callNumber: CallNumber,
              private socialSharing: SocialSharing,
              private alertController: AlertController) { }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      translucent: true,
      header: 'Timothy K. Serem',
      buttons: [{
        text: '+254786135712',
        icon: 'call',
        handler: () => {
          console.log('+254786135712 clicked');
          this.callNumber.callNumber('+254786135712', true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
        }
      }, {
        text: 'theecodepoet@gmail.com',
        icon: 'at',
        handler: () => {
          console.log('theecodepoet@gmail.com clicked');
          this.socialSharing.canShareViaEmail().then(async () => {
            // Success
            this.socialSharing.shareViaEmail(this.body, this.subject, ['theecodepoet@gmail.com']).then(async (res) => {
              // Success
              const alert = await this.alertController.create({
                mode: 'ios',
                header: 'Success',
                subHeader: 'Sent!',
                message: 'status: ' + res,
                buttons: ['OK']
              });
              await alert.present();
            }).catch(async (e) => {
              // Error!
              const alert = await this.alertController.create({
                mode: 'ios',
                header: 'Alert',
                subHeader: 'Error: ',
                message: e,
                buttons: ['OK']
              });
              await alert.present();
            });
          }).catch(async (err) => {
            // Error!
            const alert = await this.alertController.create({
              mode: 'ios',
              header: 'Alert',
              subHeader: 'Error!',
              message: err,
              buttons: ['OK']
            });
            await alert.present();
          });
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // async presentEmailAlert() {
  //   const emailAlert = await this.alertController.create({
  //     mode: 'ios',
  //     header: 'Compose me an email',
  //     inputs: [
  //       {
  //         name: 'Subject',
  //         type: 'text',
  //         id: 'subject-text',
  //         placeholder: 'Subject...'
  //       },
  //       {
  //         name: 'Body',
  //         type: 'text',
  //         id: 'body-text',
  //         placeholder: 'Body...'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Send',
  //         handler: async (data) => {
  //           if (JSON.stringify(data.Body === '')) {
  //             const alert = await this.alertController.create({
  //               mode: 'ios',
  //               header: 'Empty body',
  //               message: 'Please compose body of the email',
  //               buttons: ['OK']
  //             });
  //             await alert.present();
  //            } else if (JSON.stringify(data.Subject === '')) {
  //             const alert = await this.alertController.create({
  //               mode: 'ios',
  //               header: 'Empty subject',
  //               message: 'Please compose subject of the email',
  //               buttons: ['OK']
  //             });
  //             await alert.present();
  //            } else {
  //             this.body = JSON.stringify(data.Body); // to see the object
  //             this.subject = JSON.stringify(data.Subject);
  //            }
  //         }
  //       }
  //     ]
  //   });
  //   await emailAlert.present();
  // }
}
