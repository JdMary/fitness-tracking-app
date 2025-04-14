import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyMatchesListComponent } from './buddy-matches-list.component';

describe('BuddyMatchesListComponent', () => {
  let component: BuddyMatchesListComponent;
  let fixture: ComponentFixture<BuddyMatchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyMatchesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
