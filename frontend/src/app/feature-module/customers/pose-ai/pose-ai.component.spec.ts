import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseAiComponent } from './pose-ai.component';

describe('PoseAiComponent', () => {
  let component: PoseAiComponent;
  let fixture: ComponentFixture<PoseAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoseAiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoseAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
