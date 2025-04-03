import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersSidebarComponent } from './providers-sidebar.component';

describe('ProvidersSidebarComponent', () => {
  let component: ProvidersSidebarComponent;
  let fixture: ComponentFixture<ProvidersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
