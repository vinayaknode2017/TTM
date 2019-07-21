import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStandardComponent } from './create-standard.component';

describe('CreateStandardComponent', () => {
  let component: CreateStandardComponent;
  let fixture: ComponentFixture<CreateStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
