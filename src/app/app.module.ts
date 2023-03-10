import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
// import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NFC, Ndef],
  bootstrap: [AppComponent],
})
export class AppModule {}
