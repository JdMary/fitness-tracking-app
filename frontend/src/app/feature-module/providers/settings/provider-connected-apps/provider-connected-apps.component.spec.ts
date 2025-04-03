import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderConnectedAppsComponent } from './provider-connected-apps.component';

describe('ProviderConnectedAppsComponent', () => {
  let component: ProviderConnectedAppsComponent;
  let fixture: ComponentFixture<ProviderConnectedAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderConnectedAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderConnectedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
