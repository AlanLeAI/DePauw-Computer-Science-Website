import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratedComponent } from './illustrated.component';

describe('IllustratedComponent', () => {
  let component: IllustratedComponent;
  let fixture: ComponentFixture<IllustratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllustratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
