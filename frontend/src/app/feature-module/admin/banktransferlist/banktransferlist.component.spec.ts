import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanktransferlistComponent } from './banktransferlist.component';

describe('BanktransferlistComponent', () => {
  let component: BanktransferlistComponent;
  let fixture: ComponentFixture<BanktransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanktransferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanktransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
