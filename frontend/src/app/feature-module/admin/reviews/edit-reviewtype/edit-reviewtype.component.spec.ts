import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewtypeComponent } from './edit-reviewtype.component';

describe('EditReviewtypeComponent', () => {
  let component: EditReviewtypeComponent;
  let fixture: ComponentFixture<EditReviewtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReviewtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReviewtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
