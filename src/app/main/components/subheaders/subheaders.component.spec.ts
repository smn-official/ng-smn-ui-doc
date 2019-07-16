import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadersComponent } from './subheaders.component';

describe('SubheadersComponent', () => {
  let component: SubheadersComponent;
  let fixture: ComponentFixture<SubheadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
