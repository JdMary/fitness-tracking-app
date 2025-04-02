import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachesystemComponent } from './cachesystem.component';

describe('CachesystemComponent', () => {
  let component: CachesystemComponent;
  let fixture: ComponentFixture<CachesystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachesystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachesystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
