import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'nfc-read',
    loadChildren: () => import('./nfc-read/nfc-read.module').then( m => m.NfcReadPageModule)
  },
  {
    path: 'nfc-write',
    loadChildren: () => import('./nfc-write/nfc-write.module').then( m => m.NfcWritePageModule)
  },
  {
    path: 'qr-read',
    loadChildren: () => import('./qr-read/qr-read.module').then( m => m.QrReadPageModule)
  },
  {
    path: 'qr-generate',
    loadChildren: () => import('./qr-generate/qr-generate.module').then( m => m.QrGeneratePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
