import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderWalletComponent } from './provider-wallet.component';

describe('ProviderWalletComponent', () => {
  let component: ProviderWalletComponent;
  let fixture: ComponentFixture<ProviderWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderWalletComponent]
    });
    fixture = TestBed.createComponent(ProviderWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
