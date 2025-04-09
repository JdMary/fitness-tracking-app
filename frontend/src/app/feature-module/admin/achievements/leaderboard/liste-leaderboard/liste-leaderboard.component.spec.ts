import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAchievementsComponent } from './liste-leaderboard.component';

describe('ListeAchievementsComponent', () => {
  let component: ListeAchievementsComponent;
  let fixture: ComponentFixture<ListeAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
