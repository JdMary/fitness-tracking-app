import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogCategoriesComponent } from './add-blog-categories.component';

describe('AddBlogCategoriesComponent', () => {
  let component: AddBlogCategoriesComponent;
  let fixture: ComponentFixture<AddBlogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
