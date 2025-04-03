import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsStorageComponent } from './aws-storage.component';

describe('AwsStorageComponent', () => {
  let component: AwsStorageComponent;
  let fixture: ComponentFixture<AwsStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
