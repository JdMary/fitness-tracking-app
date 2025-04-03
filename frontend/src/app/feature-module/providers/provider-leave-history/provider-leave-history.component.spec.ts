import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLeaveHistoryComponent } from './provider-leave-history.component';

describe('ProviderLeaveHistoryComponent', () => {
  let component: ProviderLeaveHistoryComponent;
  let fixture: ComponentFixture<ProviderLeaveHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderLeaveHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderLeaveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
