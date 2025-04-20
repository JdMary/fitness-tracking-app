import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSidebarComponent } from './customers-sidebar.component';

describe('CustomersSidebarComponent', () => {
  let component: CustomersSidebarComponent;
  let fixture: ComponentFixture<CustomersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
