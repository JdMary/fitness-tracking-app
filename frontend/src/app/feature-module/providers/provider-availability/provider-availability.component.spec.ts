import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAvailabilityComponent } from './provider-availability.component';

describe('ProviderAvailabilityComponent', () => {
  let component: ProviderAvailabilityComponent;
  let fixture: ComponentFixture<ProviderAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
