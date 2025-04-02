import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderBookDetailsComponent } from './provider-book-details.component';

describe('ProviderBookDetailsComponent', () => {
  let component: ProviderBookDetailsComponent;
  let fixture: ComponentFixture<ProviderBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
