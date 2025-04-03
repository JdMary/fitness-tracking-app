import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginActivityComponent } from './user-login-activity.component';

describe('UserLoginActivityComponent', () => {
  let component: UserLoginActivityComponent;
  let fixture: ComponentFixture<UserLoginActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLoginActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
