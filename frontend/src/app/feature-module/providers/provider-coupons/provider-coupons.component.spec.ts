import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCouponsComponent } from './provider-coupons.component';

describe('ProviderCouponsComponent', () => {
  let component: ProviderCouponsComponent;
  let fixture: ComponentFixture<ProviderCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
