import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipTransactionComponent } from './membership-transaction.component';

describe('MembershipTransactionComponent', () => {
  let component: MembershipTransactionComponent;
  let fixture: ComponentFixture<MembershipTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
