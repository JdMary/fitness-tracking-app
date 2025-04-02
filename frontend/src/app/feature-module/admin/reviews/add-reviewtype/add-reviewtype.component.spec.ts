import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewtypeComponent } from './add-reviewtype.component';

describe('AddReviewtypeComponent', () => {
  let component: AddReviewtypeComponent;
  let fixture: ComponentFixture<AddReviewtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReviewtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
