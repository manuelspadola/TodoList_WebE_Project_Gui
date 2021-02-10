import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter, map } from 'rxjs/operators';
import { GetTodoListeInterface } from '../shared/get-todo-liste-interface';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';

@Component({
  selector: 'app-get-todo-liste',
  templateUrl: './get-todo-liste.component.html',
  styleUrls: ['./get-todo-liste.component.css']
})
export class GetTodoListeComponent implements OnInit {
  callId: any ;
  foundTodoList?: GetTodoListeInterface;
  dynamicPadding = 400;

isDisplay = true;
toggleDisplay(){
  this.isDisplay = !this.isDisplay;
}

  constructor(private todolistecontrollerservice: TodoListeControllerService) {
  }

  ngOnInit(): void {
}
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todolistecontrollerservice.getTodoListe(this.callId).subscribe(todolist => this.foundTodoList = todolist);
    this.toggleDisplay();
  }
  public deleteIdCall() {
    this.todolistecontrollerservice.deleteTodoListe(this.callId).subscribe();
    location.reload();
    this.toggleDisplay();
  }
// public changeVisibility(){
//  document.getElementById("deleteButton").style.visibility = "visible";
// }

}
