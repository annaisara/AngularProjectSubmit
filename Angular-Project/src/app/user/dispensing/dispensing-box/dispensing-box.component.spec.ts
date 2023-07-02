import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingBoxComponent } from './dispensing-box.component';

describe('DispensingBoxComponent', () => {
  let component: DispensingBoxComponent;
  let fixture: ComponentFixture<DispensingBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispensingBoxComponent]
    });
    fixture = TestBed.createComponent(DispensingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
