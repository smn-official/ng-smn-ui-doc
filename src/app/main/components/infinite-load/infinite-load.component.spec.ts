import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteLoadComponent } from './infinite-load.component';

describe('InfiniteLoadComponent', () => {
  let component: InfiniteLoadComponent;
  let fixture: ComponentFixture<InfiniteLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
