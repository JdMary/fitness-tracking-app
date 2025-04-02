import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpMailComponent } from './php-mail.component';

describe('PhpMailComponent', () => {
  let component: PhpMailComponent;
  let fixture: ComponentFixture<PhpMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
