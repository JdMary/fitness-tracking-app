import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundReportComponent } from './refund-report.component';

describe('RefundReportComponent', () => {
  let component: RefundReportComponent;
  let fixture: ComponentFixture<RefundReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundReportComponent]
    });
    fixture = TestBed.createComponent(RefundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
