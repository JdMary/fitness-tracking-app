import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressBookingComponent } from './inprogress-booking.component';

describe('InprogressBookingComponent', () => {
  let component: InprogressBookingComponent;
  let fixture: ComponentFixture<InprogressBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogressBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InprogressBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
