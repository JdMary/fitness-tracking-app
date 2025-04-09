import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAppointmentSettingsComponent } from './provider-appointment-settings.component';

describe('ProviderAppointmentSettingsComponent', () => {
  let component: ProviderAppointmentSettingsComponent;
  let fixture: ComponentFixture<ProviderAppointmentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAppointmentSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAppointmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
