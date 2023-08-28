import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc121Component } from './csc121.component';

describe('Csc121Component', () => {
  let component: Csc121Component;
  let fixture: ComponentFixture<Csc121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csc121Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csc121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
