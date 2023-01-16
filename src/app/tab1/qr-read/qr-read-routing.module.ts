import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrReadPage } from './qr-read.page';

const routes: Routes = [
  {
    path: '',
    component: QrReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrReadPageRoutingModule {}
