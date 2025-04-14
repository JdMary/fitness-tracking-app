import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyMatchComponent } from './buddy-match.component';

describe('BuddyMatchComponent', () => {
  let component: BuddyMatchComponent;
  let fixture: ComponentFixture<BuddyMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
