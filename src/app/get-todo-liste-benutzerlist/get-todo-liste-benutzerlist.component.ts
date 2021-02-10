import { Component, OnInit } from '@angular/core';
import { GetTodoListeInterface } from '../shared/get-todo-liste-interface';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';
@Component({
  selector: 'app-get-todo-liste-benutzerlist',
  templateUrl: './get-todo-liste-benutzerlist.component.html',
  styleUrls: ['./get-todo-liste-benutzerlist.component.css']
})
export class GetTodoListeBenutzerlistComponent implements OnInit {
  callId: any ;
  foundTodoList?: GetTodoListeInterface;
  dynamicPadding = 400;
 

  constructor(private todolistecontrollerservice: TodoListeControllerService) {
  }

  ngOnInit(): void {
}
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todolistecontrollerservice.getTodoListe(this.callId).subscribe(todolist => this.foundTodoList = todolist);
  }
}
