import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledBookingComponent } from './cancelled-booking.component';

describe('CancelledBookingComponent', () => {
  let component: CancelledBookingComponent;
  let fixture: ComponentFixture<CancelledBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
