import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderEarningsComponent } from './provider-earnings.component';

describe('ProviderEarningsComponent', () => {
  let component: ProviderEarningsComponent;
  let fixture: ComponentFixture<ProviderEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderEarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
