import { Component, OnInit } from '@angular/core';
import { TodoList } from '../shared/todo-list';
import { TodoControllerService } from '../shared/todo-controller.service';

@Component({
  selector: 'app-get-todo',
  templateUrl: './get-todo.component.html',
  styleUrls: ['./get-todo.component.css']
})
export class GetTodoComponent implements OnInit {
  callId: any;
  foundTodo?: TodoList;
  dynamicPadding = 400;
  isDisplay = true;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }
  constructor(private todocontrollerservice: TodoControllerService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todocontrollerservice.getTodo(this.callId).subscribe(todolist => this.foundTodo = todolist);
    this.toggleDisplay();
  }
  public deleteIdCall() {
    this.todocontrollerservice.deleteTodo(this.callId).subscribe();
    location.reload();
    this.toggleDisplay();
  }
}
