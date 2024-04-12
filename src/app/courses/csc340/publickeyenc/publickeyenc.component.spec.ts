import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublickeyencComponent } from './publickeyenc.component';

describe('PublickeyencComponent', () => {
  let component: PublickeyencComponent;
  let fixture: ComponentFixture<PublickeyencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublickeyencComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublickeyencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
