import { Component, Input } from '@angular/core';

@Component({
  selector: 'container-tab1',
  templateUrl: './container-tab1.component.html',
  styleUrls: ['./container-tab1.component.scss'],
})
export class ContainerTab1Component {

  @Input() name?: string;

}
