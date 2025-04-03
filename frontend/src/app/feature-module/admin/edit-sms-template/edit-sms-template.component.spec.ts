import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmsTemplateComponent } from './edit-sms-template.component';

describe('EditSmsTemplateComponent', () => {
  let component: EditSmsTemplateComponent;
  let fixture: ComponentFixture<EditSmsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSmsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSmsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
