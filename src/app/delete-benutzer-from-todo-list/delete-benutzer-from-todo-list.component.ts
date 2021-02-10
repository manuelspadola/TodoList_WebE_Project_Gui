import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';
@Component({
  selector: 'app-delete-benutzer-from-todo-list',
  templateUrl: './delete-benutzer-from-todo-list.component.html',
  styleUrls: ['./delete-benutzer-from-todo-list.component.css']
})
export class DeleteBenutzerFromTodoListComponent implements OnInit {
  benutzerId: any;
  todoListeId: any;
  dynamicPadding = 300;
// TODO: Remove this when we're done
// tslint:disable-next-line: typedef
get diagnostic() { return JSON.stringify(this.benutzerId, this.todoListeId); }

  constructor(private todolistecontrollerservice: TodoListeControllerService) { }

  @ViewChild('todoForm', { static: true }) todoForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {
    this.todolistecontrollerservice.deleteBenutzerFromTodoList(this.benutzerId, this.todoListeId).subscribe();
    alert('Ein Benutzer wurde erfolgreich gelöscht!');
    this.todoForm.reset();
    location.reload();
  }
  ngOnInit(): void {
  }
}
