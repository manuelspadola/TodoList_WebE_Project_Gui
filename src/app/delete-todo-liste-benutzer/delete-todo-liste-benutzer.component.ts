import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { BenutzerControllerService } from '../shared/benutzer-controller.service';

@Component({
  selector: 'app-delete-todo-liste-benutzer',
  templateUrl: './delete-todo-liste-benutzer.component.html',
  styleUrls: ['./delete-todo-liste-benutzer.component.css']
})
export class DeleteTodoListeBenutzerComponent implements OnInit {
  benutzerId: any;

  dynamicPadding = 300;
// TODO: Remove this when we're done
// tslint:disable-next-line: typedef
get diagnostic() { return JSON.stringify(this.benutzerId); }

  constructor(private todolistecontrollerservice: BenutzerControllerService) { }

  @ViewChild('todoForm', { static: true }) todoForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {
    this.todolistecontrollerservice.deleteTodoListeBenutzer(this.benutzerId).subscribe();
    alert('Ein Benutzer wurde erfolgreich gelöscht!');
    this.todoForm.reset();
    location.reload();
  }
  ngOnInit(): void {
  }
}
