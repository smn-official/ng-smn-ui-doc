import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetsComponent } from './bottom-sheets.component';

describe('BottomSheetsComponent', () => {
  let component: BottomSheetsComponent;
  let fixture: ComponentFixture<BottomSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
