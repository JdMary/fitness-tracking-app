import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderEditServiceComponent } from './provider-edit-service.component';

describe('ProviderEditServiceComponent', () => {
  let component: ProviderEditServiceComponent;
  let fixture: ComponentFixture<ProviderEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderEditServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
