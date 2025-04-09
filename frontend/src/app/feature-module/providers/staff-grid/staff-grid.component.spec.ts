import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGridComponent } from './staff-grid.component';

describe('StaffGridComponent', () => {
  let component: StaffGridComponent;
  let fixture: ComponentFixture<StaffGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
