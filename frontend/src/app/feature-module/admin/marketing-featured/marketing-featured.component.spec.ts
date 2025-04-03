import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFeaturedComponent } from './marketing-featured.component';

describe('MarketingFeaturedComponent', () => {
  let component: MarketingFeaturedComponent;
  let fixture: ComponentFixture<MarketingFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFeaturedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
