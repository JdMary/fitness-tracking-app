import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderEnquiryComponent } from './provider-enquiry.component';

describe('ProviderEnquiryComponent', () => {
  let component: ProviderEnquiryComponent;
  let fixture: ComponentFixture<ProviderEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderEnquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
