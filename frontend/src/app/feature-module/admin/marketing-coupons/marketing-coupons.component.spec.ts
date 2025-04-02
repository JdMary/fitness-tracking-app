import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCouponsComponent } from './marketing-coupons.component';

describe('MarketingCouponsComponent', () => {
  let component: MarketingCouponsComponent;
  let fixture: ComponentFixture<MarketingCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
