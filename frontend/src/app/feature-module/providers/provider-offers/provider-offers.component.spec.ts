import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderOffersComponent } from './provider-offers.component';

describe('ProviderOffersComponent', () => {
  let component: ProviderOffersComponent;
  let fixture: ComponentFixture<ProviderOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
