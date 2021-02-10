import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';
@Component({
  selector: 'app-delete-todo-from-todo-list',
  templateUrl: './delete-todo-from-todo-list.component.html',
  styleUrls: ['./delete-todo-from-todo-list.component.css']
})
export class DeleteTodoFromTodoListComponent implements OnInit {
  todoId: any;
  todoListeId: any;
  dynamicPadding = 300;
// TODO: Remove this when we're done
// tslint:disable-next-line: typedef
get diagnostic() { return JSON.stringify(this.todoId, this.todoListeId); }

  constructor(private todolistecontrollerservice: TodoListeControllerService) { }

  @ViewChild('todoForm', { static: true }) todoForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {
    this.todolistecontrollerservice.deleteTodoFromTodoList(this.todoId, this.todoListeId).subscribe();
    alert('Ein Todo wurde erfolgreich gelöscht!');
    this.todoForm.reset();
    location.reload();
  }
  ngOnInit(): void {
  }
}



