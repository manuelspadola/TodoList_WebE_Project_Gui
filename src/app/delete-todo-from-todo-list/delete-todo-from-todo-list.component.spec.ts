import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodoFromTodoListComponent } from './delete-todo-from-todo-list.component';

describe('DeleteTodoFromTodoListComponent', () => {
  let component: DeleteTodoFromTodoListComponent;
  let fixture: ComponentFixture<DeleteTodoFromTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTodoFromTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTodoFromTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
