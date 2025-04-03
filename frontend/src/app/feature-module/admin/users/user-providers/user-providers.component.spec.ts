import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProvidersComponent } from './user-providers.component';

describe('UserProvidersComponent', () => {
  let component: UserProvidersComponent;
  let fixture: ComponentFixture<UserProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
