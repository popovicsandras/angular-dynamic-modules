import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInnerInnerComponent } from './static-inner-inner.component';

describe('StaticInnerInnerComponent', () => {
  let component: StaticInnerInnerComponent;
  let fixture: ComponentFixture<StaticInnerInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticInnerInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInnerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
