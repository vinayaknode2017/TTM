import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMediumComponent } from './list-medium.component';

describe('ListMediumComponent', () => {
  let component: ListMediumComponent;
  let fixture: ComponentFixture<ListMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
