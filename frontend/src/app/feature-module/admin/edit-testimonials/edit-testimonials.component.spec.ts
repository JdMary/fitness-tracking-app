import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestimonialsComponent } from './edit-testimonials.component';

describe('EditTestimonialsComponent', () => {
  let component: EditTestimonialsComponent;
  let fixture: ComponentFixture<EditTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
