import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPlanComponent } from './provider-plan.component';

describe('ProviderPlanComponent', () => {
  let component: ProviderPlanComponent;
  let fixture: ComponentFixture<ProviderPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
