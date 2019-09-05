import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickersComponent } from './color-pickers.component';

describe('ColorPickersComponent', () => {
  let component: ColorPickersComponent;
  let fixture: ComponentFixture<ColorPickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
