import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateChallengeComponent } from './generate-challenge.component';

describe('GenerateChallengeComponentTsComponent', () => {
  let component: GenerateChallengeComponent;
  let fixture: ComponentFixture<GenerateChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
