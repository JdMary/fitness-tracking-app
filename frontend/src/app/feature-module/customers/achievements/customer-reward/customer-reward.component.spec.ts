import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRewardComponent } from './customer-reward.component';

describe('CustomerRewardComponent', () => {
  let component: CustomerRewardComponent;
  let fixture: ComponentFixture<CustomerRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRewardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
