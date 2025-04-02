import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSevenHeaderComponent } from './home-seven-header.component';

describe('HomeSevenHeaderComponent', () => {
  let component: HomeSevenHeaderComponent;
  let fixture: ComponentFixture<HomeSevenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSevenHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSevenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
