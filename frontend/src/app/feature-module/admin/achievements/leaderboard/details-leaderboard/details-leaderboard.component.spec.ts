import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLeaderboardComponent } from './details-leaderboard.component';

describe('DetailsLeaderboardComponent', () => {
  let component: DetailsLeaderboardComponent;
  let fixture: ComponentFixture<DetailsLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
