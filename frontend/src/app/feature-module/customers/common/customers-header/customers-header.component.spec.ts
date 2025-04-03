import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersHeaderComponent } from './customers-header.component';

describe('CustomersHeaderComponent', () => {
  let component: CustomersHeaderComponent;
  let fixture: ComponentFixture<CustomersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
