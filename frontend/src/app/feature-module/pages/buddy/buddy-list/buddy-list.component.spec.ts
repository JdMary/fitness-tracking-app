import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyListComponent } from './buddy-list.component';

describe('BuddyListComponent', () => {
  let component: BuddyListComponent;
  let fixture: ComponentFixture<BuddyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
