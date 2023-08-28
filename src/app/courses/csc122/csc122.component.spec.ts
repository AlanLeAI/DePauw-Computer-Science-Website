import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc122Component } from './csc122.component';

describe('Csc122Component', () => {
  let component: Csc122Component;
  let fixture: ComponentFixture<Csc122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc122Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
