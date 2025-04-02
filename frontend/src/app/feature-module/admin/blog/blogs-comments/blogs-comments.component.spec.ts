import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCommentsComponent } from './blogs-comments.component';

describe('BlogsCommentsComponent', () => {
  let component: BlogsCommentsComponent;
  let fixture: ComponentFixture<BlogsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
