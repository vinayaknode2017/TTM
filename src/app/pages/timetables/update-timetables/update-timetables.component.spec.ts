import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimetablesComponent } from './update-timetables.component';

describe('UpdateTimetablesComponent', () => {
  let component: UpdateTimetablesComponent;
  let fixture: ComponentFixture<UpdateTimetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTimetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
