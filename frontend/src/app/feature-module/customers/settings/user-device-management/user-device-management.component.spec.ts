import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeviceManagementComponent } from './user-device-management.component';

describe('UserDeviceManagementComponent', () => {
  let component: UserDeviceManagementComponent;
  let fixture: ComponentFixture<UserDeviceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDeviceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeviceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
