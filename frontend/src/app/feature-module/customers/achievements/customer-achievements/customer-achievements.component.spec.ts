import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAchievementsComponent } from './customer-achievements.component';

describe('CustomerAchievementsComponent', () => {
  let component: CustomerAchievementsComponent;
  let fixture: ComponentFixture<CustomerAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
