import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc232Component } from './csc232.component';

describe('Csc232Component', () => {
  let component: Csc232Component;
  let fixture: ComponentFixture<Csc232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc232Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
