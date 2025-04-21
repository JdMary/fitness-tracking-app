import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFacilityComponent } from './sport-facility.component';

describe('SportFacilityComponent', () => {
  let component: SportFacilityComponent;
  let fixture: ComponentFixture<SportFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
