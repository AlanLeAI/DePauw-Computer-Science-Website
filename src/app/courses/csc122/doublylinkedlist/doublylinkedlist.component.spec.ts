import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublylinkedlistComponent } from './doublylinkedlist.component';

describe('DoublylinkedlistComponent', () => {
  let component: DoublylinkedlistComponent;
  let fixture: ComponentFixture<DoublylinkedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublylinkedlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublylinkedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
