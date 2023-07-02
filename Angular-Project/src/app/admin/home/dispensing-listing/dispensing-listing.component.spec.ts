import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingListingComponent } from './dispensing-listing.component';

describe('DispensingListingComponent', () => {
  let component: DispensingListingComponent;
  let fixture: ComponentFixture<DispensingListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispensingListingComponent]
    });
    fixture = TestBed.createComponent(DispensingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
