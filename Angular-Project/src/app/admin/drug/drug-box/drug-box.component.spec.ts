import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugBoxComponent } from './drug-box.component';

describe('DrugBoxComponent', () => {
  let component: DrugBoxComponent;
  let fixture: ComponentFixture<DrugBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugBoxComponent]
    });
    fixture = TestBed.createComponent(DrugBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
