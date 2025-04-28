import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInsightsComponent } from './progress-insights.component';

describe('ProgressInsightsComponent', () => {
  let component: ProgressInsightsComponent;
  let fixture: ComponentFixture<ProgressInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
