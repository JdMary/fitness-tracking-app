import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSocialProfileComponent } from './provider-social-profile.component';

describe('ProviderSocialProfileComponent', () => {
  let component: ProviderSocialProfileComponent;
  let fixture: ComponentFixture<ProviderSocialProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSocialProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSocialProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
