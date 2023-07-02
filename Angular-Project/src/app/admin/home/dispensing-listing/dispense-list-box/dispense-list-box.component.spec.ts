import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseListBoxComponent } from './dispense-list-box.component';

describe('DispenseListBoxComponent', () => {
  let component: DispenseListBoxComponent;
  let fixture: ComponentFixture<DispenseListBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispenseListBoxComponent]
    });
    fixture = TestBed.createComponent(DispenseListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
