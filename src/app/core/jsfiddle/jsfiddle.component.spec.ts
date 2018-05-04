import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfiddleComponent } from './jsfiddle.component';

describe('JsfiddleComponent', () => {
  let component: JsfiddleComponent;
  let fixture: ComponentFixture<JsfiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
