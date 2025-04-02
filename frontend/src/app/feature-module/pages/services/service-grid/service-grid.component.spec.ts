import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGridComponent } from './service-grid.component';

describe('ServiceGridComponent', () => {
  let component: ServiceGridComponent;
  let fixture: ComponentFixture<ServiceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
