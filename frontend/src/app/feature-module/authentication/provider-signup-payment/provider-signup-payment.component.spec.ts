import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSignupPaymentComponent } from './provider-signup-payment.component';

describe('ProviderSignupPaymentComponent', () => {
  let component: ProviderSignupPaymentComponent;
  let fixture: ComponentFixture<ProviderSignupPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSignupPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSignupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
