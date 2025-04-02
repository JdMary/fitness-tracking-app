import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDeviceManagememtComponent } from './provider-device-managememt.component';

describe('ProviderDeviceManagememtComponent', () => {
  let component: ProviderDeviceManagememtComponent;
  let fixture: ComponentFixture<ProviderDeviceManagememtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDeviceManagememtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderDeviceManagememtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
