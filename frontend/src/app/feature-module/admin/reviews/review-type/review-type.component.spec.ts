import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTypeComponent } from './review-type.component';

describe('ReviewTypeComponent', () => {
  let component: ReviewTypeComponent;
  let fixture: ComponentFixture<ReviewTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
