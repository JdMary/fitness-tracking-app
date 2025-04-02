import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSignupSubscriptionComponent } from './provider-signup-subscription.component';

describe('ProviderSignupSubscriptionComponent', () => {
  let component: ProviderSignupSubscriptionComponent;
  let fixture: ComponentFixture<ProviderSignupSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSignupSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSignupSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
