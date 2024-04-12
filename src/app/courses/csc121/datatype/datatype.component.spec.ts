import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeComponent } from './datatype.component';

describe('DatatypeComponent', () => {
  let component: DatatypeComponent;
  let fixture: ComponentFixture<DatatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
