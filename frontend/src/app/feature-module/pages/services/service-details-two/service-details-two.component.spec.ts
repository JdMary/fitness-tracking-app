import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsTwoComponent } from './service-details-two.component';

describe('ServiceDetailsTwoComponent', () => {
  let component: ServiceDetailsTwoComponent;
  let fixture: ComponentFixture<ServiceDetailsTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailsTwoComponent]
    });
    fixture = TestBed.createComponent(ServiceDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
