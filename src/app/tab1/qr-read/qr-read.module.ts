import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrReadPageRoutingModule } from './qr-read-routing.module';

import { QrReadPage } from './qr-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrReadPageRoutingModule
  ],
  declarations: [QrReadPage]
})
export class QrReadPageModule {}
