import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Array1dComponent } from './array1d.component';

describe('Array1dComponent', () => {
  let component: Array1dComponent;
  let fixture: ComponentFixture<Array1dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Array1dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Array1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
