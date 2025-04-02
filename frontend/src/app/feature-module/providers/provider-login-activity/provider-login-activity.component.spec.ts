import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLoginActivityComponent } from './provider-login-activity.component';

describe('ProviderLoginActivityComponent', () => {
  let component: ProviderLoginActivityComponent;
  let fixture: ComponentFixture<ProviderLoginActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderLoginActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderLoginActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
