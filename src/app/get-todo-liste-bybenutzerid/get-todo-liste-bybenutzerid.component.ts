import { Component, OnInit } from '@angular/core';
import { GetTodoListeBybenutzerid } from '../shared/get-todo-liste-bybenutzerid';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';
@Component({
  selector: 'app-get-todo-liste-bybenutzerid',
  templateUrl: './get-todo-liste-bybenutzerid.component.html',
  styleUrls: ['./get-todo-liste-bybenutzerid.component.css']
})
export class GetTodoListeBybenutzeridComponent implements OnInit {
  callId: any ;
  foundTodoList?: GetTodoListeBybenutzerid;
  dynamicPadding = 400;


  constructor(private todolistecontrollerservice: TodoListeControllerService) {
  }

  ngOnInit(): void {
}
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todolistecontrollerservice.getTodoListeByBenutzerId(this.callId).subscribe(todolist => this.foundTodoList = todolist);
  }
}
