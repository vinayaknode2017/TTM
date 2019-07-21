import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStandardComponent } from './update-standard.component';

describe('UpdateStandardComponent', () => {
  let component: UpdateStandardComponent;
  let fixture: ComponentFixture<UpdateStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
