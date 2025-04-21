import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanListComponent } from './diet-plan-list.component';

describe('DietPlanListComponent', () => {
  let component: DietPlanListComponent;
  let fixture: ComponentFixture<DietPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPlanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
