import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderProfileSettingsComponent } from './provider-profile-settings.component';

describe('ProviderProfileSettingsComponent', () => {
  let component: ProviderProfileSettingsComponent;
  let fixture: ComponentFixture<ProviderProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderProfileSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
