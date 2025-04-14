import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyRequestComponent } from './buddy-request.component';

describe('BuddyRequestComponent', () => {
  let component: BuddyRequestComponent;
  let fixture: ComponentFixture<BuddyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
