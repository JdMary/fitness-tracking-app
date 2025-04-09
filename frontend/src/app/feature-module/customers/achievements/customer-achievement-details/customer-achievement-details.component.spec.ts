import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAchievementDetailsComponent } from './customer-achievement-details.component';

describe('CustomerAchievementDetailsComponent', () => {
  let component: CustomerAchievementDetailsComponent;
  let fixture: ComponentFixture<CustomerAchievementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAchievementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAchievementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
