import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLeaderboardComponent } from './customer-leaderboard.component';

describe('CustomerLeaderboardComponent', () => {
  let component: CustomerLeaderboardComponent;
  let fixture: ComponentFixture<CustomerLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
