import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServicesListComponent } from './provider-services-list.component';

describe('ProviderServicesListComponent', () => {
  let component: ProviderServicesListComponent;
  let fixture: ComponentFixture<ProviderServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
