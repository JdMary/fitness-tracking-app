import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSecuritySettingsComponent } from './provider-security-settings.component';

describe('ProviderSecuritySettingsComponent', () => {
  let component: ProviderSecuritySettingsComponent;
  let fixture: ComponentFixture<ProviderSecuritySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSecuritySettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSecuritySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
