import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arr2dComponent } from './arr2d.component';

describe('Arr2dComponent', () => {
  let component: Arr2dComponent;
  let fixture: ComponentFixture<Arr2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arr2dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arr2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
