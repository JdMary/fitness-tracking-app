import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaderboardComponent } from './add-leaderboard.component';

describe('add-leaderboardComponent', () => {
  let component: AddLeaderboardComponent;
  let fixture: ComponentFixture<AddLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
