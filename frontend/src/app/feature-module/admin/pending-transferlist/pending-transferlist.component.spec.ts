import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTransferlistComponent } from './pending-transferlist.component';

describe('PendingTransferlistComponent', () => {
  let component: PendingTransferlistComponent;
  let fixture: ComponentFixture<PendingTransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTransferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
