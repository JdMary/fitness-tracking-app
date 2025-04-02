import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTransferlistComponent } from './approved-transferlist.component';

describe('ApprovedTransferlistComponent', () => {
  let component: ApprovedTransferlistComponent;
  let fixture: ComponentFixture<ApprovedTransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedTransferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedTransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
