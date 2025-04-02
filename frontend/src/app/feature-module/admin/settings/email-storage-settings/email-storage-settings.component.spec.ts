import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStorageSettingsComponent } from './email-storage-settings.component';

describe('EmailStorageSettingsComponent', () => {
  let component: EmailStorageSettingsComponent;
  let fixture: ComponentFixture<EmailStorageSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailStorageSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailStorageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
