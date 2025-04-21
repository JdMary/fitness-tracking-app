import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSportFacilityComponent } from './edit-sport-facility.component';

describe('EditSportFacilityComponent', () => {
  let component: EditSportFacilityComponent;
  let fixture: ComponentFixture<EditSportFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSportFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
