import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRegistrationsComponent } from './list-user-registrations.component';

describe('ListUserRegistrationsComponent', () => {
  let component: ListUserRegistrationsComponent;
  let fixture: ComponentFixture<ListUserRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUserRegistrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
