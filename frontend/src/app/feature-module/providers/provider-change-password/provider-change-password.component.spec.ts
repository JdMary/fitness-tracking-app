import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChangePasswordComponent } from './provider-change-password.component';

describe('ProviderChangePasswordComponent', () => {
  let component: ProviderChangePasswordComponent;
  let fixture: ComponentFixture<ProviderChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
