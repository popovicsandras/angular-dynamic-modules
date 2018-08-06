import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInnerComponent } from './static-inner.component';

describe('StaticInnerComponent', () => {
  let component: StaticInnerComponent;
  let fixture: ComponentFixture<StaticInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
