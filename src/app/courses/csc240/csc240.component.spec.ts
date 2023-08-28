import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc240Component } from './csc240.component';

describe('Csc240Component', () => {
  let component: Csc240Component;
  let fixture: ComponentFixture<Csc240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc240Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
