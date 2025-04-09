import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePluginsComponent } from './available-plugins.component';

describe('AvailablePluginsComponent', () => {
  let component: AvailablePluginsComponent;
  let fixture: ComponentFixture<AvailablePluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablePluginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablePluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
