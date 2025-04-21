import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDetailComponent } from './sport-facility-details.component';

describe('SportFacilityDetailsComponent', () => {
  let component: FacilityDetailComponent;
  let fixture: ComponentFixture<FacilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
