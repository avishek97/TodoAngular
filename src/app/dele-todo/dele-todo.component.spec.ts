import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleTodoComponent } from './dele-todo.component';

describe('DeleTodoComponent', () => {
  let component: DeleTodoComponent;
  let fixture: ComponentFixture<DeleTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
