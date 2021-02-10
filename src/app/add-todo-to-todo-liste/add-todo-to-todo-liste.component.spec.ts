import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoToTodoListeComponent } from './add-todo-to-todo-liste.component';

describe('AddTodoToTodoListeComponent', () => {
  let component: AddTodoToTodoListeComponent;
  let fixture: ComponentFixture<AddTodoToTodoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoToTodoListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoToTodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
