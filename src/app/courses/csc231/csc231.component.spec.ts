import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc231Component } from './csc231.component';

describe('Csc231Component', () => {
  let component: Csc231Component;
  let fixture: ComponentFixture<Csc231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc231Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
