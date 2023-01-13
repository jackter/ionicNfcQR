import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerTab2Component } from './container-tab2.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ContainerTab2Component],
  exports: [ContainerTab2Component]
})
export class ContainerTab2ComponentModule {}
