import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChallengesComponent } from './liste-challenges.component';

describe('ListeChallengesComponent', () => {
  let component: ListeChallengesComponent;
  let fixture: ComponentFixture<ListeChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeChallengesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
