import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderHolidayComponent } from './provider-holiday.component';

describe('ProviderHolidayComponent', () => {
  let component: ProviderHolidayComponent;
  let fixture: ComponentFixture<ProviderHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderHolidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
