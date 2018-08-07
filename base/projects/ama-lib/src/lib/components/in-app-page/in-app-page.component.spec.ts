import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppPageComponent } from './in-app-page.component';

describe('InAppPageComponent', () => {
  let component: InAppPageComponent;
  let fixture: ComponentFixture<InAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
