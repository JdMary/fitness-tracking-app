import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCategoriesComponent } from './blogs-categories.component';

describe('BlogsCategoriesComponent', () => {
  let component: BlogsCategoriesComponent;
  let fixture: ComponentFixture<BlogsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
