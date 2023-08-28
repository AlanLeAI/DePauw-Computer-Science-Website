import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashmapComponent } from './hashmap.component';

describe('HashmapComponent', () => {
  let component: HashmapComponent;
  let fixture: ComponentFixture<HashmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
