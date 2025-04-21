import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDietPlanComponent } from './generate-diet-plan.component';

describe('GenerateDietPlanComponent', () => {
  let component: GenerateDietPlanComponent;
  let fixture: ComponentFixture<GenerateDietPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateDietPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
