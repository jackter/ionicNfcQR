import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerTab1Component } from './container-tab1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ContainerTab1Component],
  exports: [ContainerTab1Component]
})
export class ContainerTab1ComponentModule {}
