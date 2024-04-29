import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfsbfsComponent } from './dfsbfs.component';

describe('DfsbfsComponent', () => {
  let component: DfsbfsComponent;
  let fixture: ComponentFixture<DfsbfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfsbfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfsbfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
