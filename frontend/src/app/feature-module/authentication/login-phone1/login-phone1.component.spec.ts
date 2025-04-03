import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhone1Component } from './login-phone1.component';

describe('LoginPhone1Component', () => {
  let component: LoginPhone1Component;
  let fixture: ComponentFixture<LoginPhone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPhone1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPhone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
