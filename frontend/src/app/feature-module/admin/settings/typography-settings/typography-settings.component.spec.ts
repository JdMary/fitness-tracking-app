import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographySettingsComponent } from './typography-settings.component';

describe('TypographySettingsComponent', () => {
  let component: TypographySettingsComponent;
  let fixture: ComponentFixture<TypographySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypographySettingsComponent]
    });
    fixture = TestBed.createComponent(TypographySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
