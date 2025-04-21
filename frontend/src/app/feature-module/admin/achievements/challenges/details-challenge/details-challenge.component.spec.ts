import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChallengeComponent } from './details-challenge.component';

describe('DetailsChallengeComponent', () => {
  let component: DetailsChallengeComponent;
  let fixture: ComponentFixture<DetailsChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
