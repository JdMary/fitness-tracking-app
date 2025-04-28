import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesListComponent } from './exercices-list.component';

describe('ExercicesListComponent', () => {
  let component: ExercicesListComponent;
  let fixture: ComponentFixture<ExercicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
