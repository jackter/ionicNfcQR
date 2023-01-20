import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

@Component({
  selector: 'app-nfc-read',
  templateUrl: './nfc-read.page.html',
  styleUrls: ['./nfc-read.page.scss'],
})
export class NfcReadPage implements OnInit {

  readerMode:any;

  constructor(
    private nfc: NFC
  ) { }

  ngOnInit() {
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;

    this.nfc.readerMode(flags).subscribe(
        tag => this.setTagData(tag),
        err => console.log('Error reading tag', err)
    );

    setInterval(() => {     
      if(typeof this.readerMode !== 'undefined') {  
        console.log(this.readerMode);
      }
    }, 1000);
  }

  setTagData(data:any) {
    console.log(JSON.stringify(data));    
    this.readerMode = data;  
  }

  ByteToStr(val: number[]) {
    // return this.nfc.bytesToString(val).replace("en", "");
    return this.nfc.bytesToString(val).substring(3);
  }

}
