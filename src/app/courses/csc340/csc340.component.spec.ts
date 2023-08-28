import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc340Component } from './csc340.component';

describe('Csc340Component', () => {
  let component: Csc340Component;
  let fixture: ComponentFixture<Csc340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc340Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
