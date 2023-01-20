import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nfc-write',
  templateUrl: './nfc-write.page.html',
  styleUrls: ['./nfc-write.page.scss'],
})
export class NfcWritePage implements OnInit {

  record:string;

  constructor(
    private nfc: NFC, 
    private ndef: Ndef,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  // writeTag() {
  //   // var message = [
  //   //     this.ndef.textRecord(this.record)
  //   // ];

  //   // this.nfc.write(message);

  //   // var message = [
  //   //     this.ndef.textRecord("hello, world")
  //   // ];
    
  //   // this.nfc.write(message);

  //   this.nfc.addNdefListener(() => {
  //     console.log('successfully attached ndef listener');
  //   }, (err:any) => {
  //     console.log('error attaching ndef listener', err);
  //   }).subscribe((event) => {    
  //     let message = this.ndef.textRecord('Hello world');
  //     this.nfc.share([message]).then((success) => {
  //       console.log('Success, Write to NFC');        
  //       this.presentToast('middle', 'Success, Write to NFC')
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  //   });
  // }

  writeTag() {
    this.presentToast('Setting up...');
    this.nfc
      .addNdefListener(
        () => {
          this.presentToast('Successfully connected NDEF listener');
        },
        (err: any) => {
          this.presentToast(
            'There was an error connecting to an NDEF listener.  Make sure you have NFC turned on.'
          );
        }
      )
      .subscribe(event => {
        const message = this.ndef.textRecord('test');
        this.nfc
          .share([message])
          .then(success => {
            console.log(success);
            this.presentToast('Successfully written!');
          })
          .catch(error => {
            this.presentToast('Writing failed. Please try again.');
            console.log(error);
          });
      });
  }

  eraseTag() {
    
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'middle'
    });

    await toast.present();
  }

  // async presentToast(position: 'top' | 'middle' | 'bottom', msg:string) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 1500,
  //     position: position
  //   });

  //   await toast.present();
  // }

}
