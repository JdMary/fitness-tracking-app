import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDietPlanComponent } from './diet-plan.component';

describe('DietPlanComponent', () => {
  let component: AdminDietPlanComponent;
  let fixture: ComponentFixture<AdminDietPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDietPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
