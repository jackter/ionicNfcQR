import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerTab1Component } from './container-tab1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ContainerTab1Component],
  exports: [ContainerTab1Component]
})
export class ContainerTab1ComponentModule {}
