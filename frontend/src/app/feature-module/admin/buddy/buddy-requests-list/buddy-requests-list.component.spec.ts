import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyRequestsListComponent } from './buddy-requests-list.component';

describe('BuddyRequestsListComponent', () => {
  let component: BuddyRequestsListComponent;
  let fixture: ComponentFixture<BuddyRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyRequestsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
