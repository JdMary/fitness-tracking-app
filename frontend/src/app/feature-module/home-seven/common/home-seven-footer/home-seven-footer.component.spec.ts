import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSevenFooterComponent } from './home-seven-footer.component';

describe('HomeSevenFooterComponent', () => {
  let component: HomeSevenFooterComponent;
  let fixture: ComponentFixture<HomeSevenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSevenFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSevenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
