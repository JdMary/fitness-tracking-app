import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventRegistrationsComponent } from './list-event-registrations.component';

describe('ListEventRegistrationsComponent', () => {
  let component: ListEventRegistrationsComponent;
  let fixture: ComponentFixture<ListEventRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEventRegistrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEventRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
