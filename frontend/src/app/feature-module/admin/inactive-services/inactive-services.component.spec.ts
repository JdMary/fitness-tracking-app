import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveServicesComponent } from './inactive-services.component';

describe('InactiveServicesComponent', () => {
  let component: InactiveServicesComponent;
  let fixture: ComponentFixture<InactiveServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
