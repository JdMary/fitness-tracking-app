import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingNewsletterComponent } from './marketing-newsletter.component';

describe('MarketingNewsletterComponent', () => {
  let component: MarketingNewsletterComponent;
  let fixture: ComponentFixture<MarketingNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
