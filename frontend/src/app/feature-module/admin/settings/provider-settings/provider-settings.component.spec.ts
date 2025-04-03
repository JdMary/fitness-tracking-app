import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSettingsComponent } from './provider-settings.component';

describe('ProviderSettingsComponent', () => {
  let component: ProviderSettingsComponent;
  let fixture: ComponentFixture<ProviderSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
