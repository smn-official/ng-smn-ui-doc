import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGitsComponent } from './code-gits.component';

describe('CodeGitsComponent', () => {
  let component: CodeGitsComponent;
  let fixture: ComponentFixture<CodeGitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
