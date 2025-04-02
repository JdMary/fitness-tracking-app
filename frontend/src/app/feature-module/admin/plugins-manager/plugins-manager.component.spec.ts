import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsManagerComponent } from './plugins-manager.component';

describe('PluginsManagerComponent', () => {
  let component: PluginsManagerComponent;
  let fixture: ComponentFixture<PluginsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
