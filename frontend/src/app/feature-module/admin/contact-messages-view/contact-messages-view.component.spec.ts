import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessagesViewComponent } from './contact-messages-view.component';

describe('ContactMessagesViewComponent', () => {
  let component: ContactMessagesViewComponent;
  let fixture: ComponentFixture<ContactMessagesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMessagesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMessagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
