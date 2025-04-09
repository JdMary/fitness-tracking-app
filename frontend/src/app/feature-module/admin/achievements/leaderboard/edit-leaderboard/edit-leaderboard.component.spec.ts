import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaderboardComponent } from './edit-leaderboard.component';

describe('EditLeaderboardComponent', () => {
  let component: EditLeaderboardComponent;
  let fixture: ComponentFixture<EditLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
