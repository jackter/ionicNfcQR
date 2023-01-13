import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContainerTab2Component } from './container-tab2.component';

describe('ContainerTab2Component', () => {
  let component: ContainerTab2Component;
  let fixture: ComponentFixture<ContainerTab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerTab2Component],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
