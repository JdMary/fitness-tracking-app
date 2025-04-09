import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSalesComponent } from './provider-sales.component';

describe('ProviderSalesComponent', () => {
  let component: ProviderSalesComponent;
  let fixture: ComponentFixture<ProviderSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderSalesComponent]
    });
    fixture = TestBed.createComponent(ProviderSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
