import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOnFacebookComponent } from './share-on-facebook.component';

describe('ShareOnFacebookComponent', () => {
  let component: ShareOnFacebookComponent;
  let fixture: ComponentFixture<ShareOnFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareOnFacebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareOnFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
