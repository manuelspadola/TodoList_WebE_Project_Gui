import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, NgForm } from '@angular/forms';
import { TodoList } from '../shared/todo-list';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';

@Component({
  selector: 'app-add-todo-to-todo-liste',
  templateUrl: './add-todo-to-todo-liste.component.html',
  styleUrls: ['./add-todo-to-todo-liste.component.css']
})
export class AddTodoToTodoListeComponent implements OnInit {
  callId: any;
  dynamicPadding = 100;


  todo = new TodoList(1, '', '', false);
  // TODO: Remove this when we're done
  // tslint:disable-next-line: typedef
  get diagnostic() { return JSON.stringify(this.todo); }

  constructor(
    private tdls: TodoListeControllerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  @ViewChild('todoForm', { static: true }) todoForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {// die Methode erählt als Argument den Paylaod des Events vom Type List
    // tslint:disable-next-line: max-line-length
    this.tdls.addTodoToTodoListe(this.todo, this.callId).subscribe(); // () => { //  aus dem TodoListeService wird die Methode create aufgerufen
    // der dahinter liegende HTTP Aufruf gibt ein Observable zurück, das wir subscriben
    alert('Ein neues Todo wurde erfolgreich hinzugefügt!');
    this.todoForm.reset();
  }
  ngOnInit(): void {
  }
}
