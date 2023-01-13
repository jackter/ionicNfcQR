import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContainerTab1Component } from './container-tab1.component';

describe('ContainerTab1Component', () => {
  let component: ContainerTab1Component;
  let fixture: ComponentFixture<ContainerTab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTab1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
