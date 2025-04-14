import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyComponent } from './buddy.component';

describe('BuddyComponent', () => {
  let component: BuddyComponent;
  let fixture: ComponentFixture<BuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
