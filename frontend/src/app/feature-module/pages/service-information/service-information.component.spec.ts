import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInformationComponent } from './service-information.component';

describe('ServiceInformationComponent', () => {
  let component: ServiceInformationComponent;
  let fixture: ComponentFixture<ServiceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
