import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAccountsSettingsComponent } from './provider-accounts-settings.component';

describe('ProviderAccountsSettingsComponent', () => {
  let component: ProviderAccountsSettingsComponent;
  let fixture: ComponentFixture<ProviderAccountsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderAccountsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAccountsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
