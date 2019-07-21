import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubjectComponent } from './update-subject.component';

describe('UpdateSubjectComponent', () => {
  let component: UpdateSubjectComponent;
  let fixture: ComponentFixture<UpdateSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
