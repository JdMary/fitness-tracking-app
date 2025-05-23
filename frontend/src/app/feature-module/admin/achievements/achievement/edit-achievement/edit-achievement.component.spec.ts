import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAchievementComponent } from './edit-achievement.component';

describe('EditAchievementComponent', () => {
  let component: EditAchievementComponent;
  let fixture: ComponentFixture<EditAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAchievementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
