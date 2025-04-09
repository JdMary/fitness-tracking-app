import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChallengeComponent } from './customer-challenge.component';

describe('CustomerChallengeComponent', () => {
  let component: CustomerChallengeComponent;
  let fixture: ComponentFixture<CustomerChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
