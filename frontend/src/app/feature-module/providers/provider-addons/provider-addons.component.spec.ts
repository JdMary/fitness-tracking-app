import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAddonsComponent } from './provider-addons.component';

describe('ProviderAddonsComponent', () => {
  let component: ProviderAddonsComponent;
  let fixture: ComponentFixture<ProviderAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAddonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
