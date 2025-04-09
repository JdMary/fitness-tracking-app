import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChallengeDetailsComponent } from './customer-challenge-details.component';

describe('CustomerChallengeDetailsComponent', () => {
  let component: CustomerChallengeDetailsComponent;
  let fixture: ComponentFixture<CustomerChallengeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerChallengeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerChallengeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
