import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaLibComponent } from './ama-lib.component';

describe('AmaLibComponent', () => {
  let component: AmaLibComponent;
  let fixture: ComponentFixture<AmaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
