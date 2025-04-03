import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexmoComponent } from './nexmo.component';

describe('NexmoComponent', () => {
  let component: NexmoComponent;
  let fixture: ComponentFixture<NexmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
