import { Component, Input } from '@angular/core';

@Component({
  selector: 'container-tab2',
  templateUrl: './container-tab2.component.html',
  styleUrls: ['./container-tab2.component.scss'],
})
export class ContainerTab2Component {

  @Input() name?: string;

}
