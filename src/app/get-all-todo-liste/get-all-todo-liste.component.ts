import { Component, OnInit } from '@angular/core';
import { GetTodoListeInterface } from '../shared/get-todo-liste-interface';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';

@Component({
  selector: 'app-get-all-todo-liste',
  templateUrl: './get-all-todo-liste.component.html',
  styleUrls: ['./get-all-todo-liste.component.css']
})
export class GetAllTodoListeComponent implements OnInit {
  callId: any ;
  foundAllTodoList?: GetTodoListeInterface[];
  dynamicPadding = 400;


  constructor(private todolistecontrollerservice: TodoListeControllerService) {
  }

  ngOnInit(): void {
}
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todolistecontrollerservice.getAllTodoListe().subscribe(todolist => this.foundAllTodoList = todolist);
  }
}
