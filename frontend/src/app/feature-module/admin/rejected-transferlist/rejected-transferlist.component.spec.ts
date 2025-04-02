import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTransferlistComponent } from './rejected-transferlist.component';

describe('RejectedTransferlistComponent', () => {
  let component: RejectedTransferlistComponent;
  let fixture: ComponentFixture<RejectedTransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedTransferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedTransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
