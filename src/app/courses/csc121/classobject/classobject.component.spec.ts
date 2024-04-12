import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassobjectComponent } from './classobject.component';

describe('ClassobjectComponent', () => {
  let component: ClassobjectComponent;
  let fixture: ComponentFixture<ClassobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
