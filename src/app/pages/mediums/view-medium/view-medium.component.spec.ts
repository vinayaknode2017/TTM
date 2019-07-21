import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediumComponent } from './view-medium.component';

describe('ViewMediumComponent', () => {
  let component: ViewMediumComponent;
  let fixture: ComponentFixture<ViewMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
