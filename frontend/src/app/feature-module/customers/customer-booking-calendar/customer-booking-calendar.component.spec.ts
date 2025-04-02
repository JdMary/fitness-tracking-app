import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingCalendarComponent } from './customer-booking-calendar.component';

describe('CustomerBookingCalendarComponent', () => {
  let component: CustomerBookingCalendarComponent;
  let fixture: ComponentFixture<CustomerBookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBookingCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
