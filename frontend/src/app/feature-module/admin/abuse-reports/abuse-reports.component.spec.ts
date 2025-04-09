import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuseReportsComponent } from './abuse-reports.component';

describe('AbuseReportsComponent', () => {
  let component: AbuseReportsComponent;
  let fixture: ComponentFixture<AbuseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbuseReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbuseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
