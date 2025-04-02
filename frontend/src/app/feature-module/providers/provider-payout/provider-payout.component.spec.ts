import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPayoutComponent } from './provider-payout.component';

describe('ProviderPayoutComponent', () => {
  let component: ProviderPayoutComponent;
  let fixture: ComponentFixture<ProviderPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
