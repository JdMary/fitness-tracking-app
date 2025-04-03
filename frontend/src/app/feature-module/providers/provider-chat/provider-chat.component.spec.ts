import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChatComponent } from './provider-chat.component';

describe('ProviderChatComponent', () => {
  let component: ProviderChatComponent;
  let fixture: ComponentFixture<ProviderChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
