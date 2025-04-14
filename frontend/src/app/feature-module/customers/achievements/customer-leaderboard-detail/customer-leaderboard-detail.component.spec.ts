import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLeaderboardDetailComponent } from './customer-leaderboard-detail.component';

describe('CustomerLeaderboardDetailComponent', () => {
  let component: CustomerLeaderboardDetailComponent;
  let fixture: ComponentFixture<CustomerLeaderboardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerLeaderboardDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLeaderboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
