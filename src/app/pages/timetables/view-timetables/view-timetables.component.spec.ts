import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimetablesComponent } from './view-timetables.component';

describe('ViewTimetablesComponent', () => {
  let component: ViewTimetablesComponent;
  let fixture: ComponentFixture<ViewTimetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
