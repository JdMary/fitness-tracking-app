import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountriesComponent } from './edit-countries.component';

describe('EditCountriesComponent', () => {
  let component: EditCountriesComponent;
  let fixture: ComponentFixture<EditCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
