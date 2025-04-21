import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSportFacilityComponent } from './list-sport-facility.component';

describe('ListSportFacilityComponent', () => {
  let component: ListSportFacilityComponent;
  let fixture: ComponentFixture<ListSportFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSportFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
