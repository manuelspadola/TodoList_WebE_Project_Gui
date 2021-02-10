import { Component, OnInit } from '@angular/core';
import { TodoList } from '../shared/todo-list';
import { TodoControllerService } from '../shared/todo-controller.service';

@Component({
  selector: 'app-get-all-todo',
  templateUrl: './get-all-todo.component.html',
  styleUrls: ['./get-all-todo.component.css']
})
export class GetAllTodoComponent implements OnInit {
  callId: any ;
  foundTodoList?: TodoList[];
  dynamicPadding = 400;

  constructor(private todocontrollerservice: TodoControllerService) { }

  ngOnInit(): void {
  }
    // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todocontrollerservice.getAllTodo(this.callId).subscribe(todolist => this.foundTodoList = todolist);
  }
}
