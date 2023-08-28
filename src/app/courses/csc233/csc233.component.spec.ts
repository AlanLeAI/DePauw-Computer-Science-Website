import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc233Component } from './csc233.component';

describe('Csc233Component', () => {
  let component: Csc233Component;
  let fixture: ComponentFixture<Csc233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc233Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
