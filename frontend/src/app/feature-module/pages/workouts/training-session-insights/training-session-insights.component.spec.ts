import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionInsightsComponent } from './training-session-insights.component';

describe('TrainingSessionInsightsComponent', () => {
  let component: TrainingSessionInsightsComponent;
  let fixture: ComponentFixture<TrainingSessionInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingSessionInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSessionInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
