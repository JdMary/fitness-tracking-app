import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogCategoriesComponent } from './edit-blog-categories.component';

describe('EditBlogCategoriesComponent', () => {
  let component: EditBlogCategoriesComponent;
  let fixture: ComponentFixture<EditBlogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
