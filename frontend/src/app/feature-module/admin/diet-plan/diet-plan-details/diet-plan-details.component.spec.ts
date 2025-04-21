import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanDetailsComponent } from './diet-plan-details.component';

describe('DietPlanDetailsComponent', () => {
  let component: DietPlanDetailsComponent;
  let fixture: ComponentFixture<DietPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPlanDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
