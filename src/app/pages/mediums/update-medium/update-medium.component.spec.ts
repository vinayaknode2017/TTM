import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMediumComponent } from './update-medium.component';

describe('UpdateMediumComponent', () => {
  let component: UpdateMediumComponent;
  let fixture: ComponentFixture<UpdateMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
