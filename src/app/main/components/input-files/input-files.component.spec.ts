import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilesComponent } from './input-files.component';

describe('InputFilesComponent', () => {
  let component: InputFilesComponent;
  let fixture: ComponentFixture<InputFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
