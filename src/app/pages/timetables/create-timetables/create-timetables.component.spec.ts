import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimetablesComponent } from './create-timetables.component';

describe('CreateTimetablesComponent', () => {
  let component: CreateTimetablesComponent;
  let fixture: ComponentFixture<CreateTimetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
