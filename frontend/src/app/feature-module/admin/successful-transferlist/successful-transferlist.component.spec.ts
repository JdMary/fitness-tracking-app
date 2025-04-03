import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTransferlistComponent } from './successful-transferlist.component';

describe('SuccessfulTransferlistComponent', () => {
  let component: SuccessfulTransferlistComponent;
  let fixture: ComponentFixture<SuccessfulTransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulTransferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulTransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
