import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenySettingsComponent } from './curreny-settings.component';

describe('CurrenySettingsComponent', () => {
  let component: CurrenySettingsComponent;
  let fixture: ComponentFixture<CurrenySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenySettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
