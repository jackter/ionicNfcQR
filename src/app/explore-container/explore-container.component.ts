import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab1-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

}
