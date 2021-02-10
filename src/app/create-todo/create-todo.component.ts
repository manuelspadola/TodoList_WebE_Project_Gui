import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, NgForm } from '@angular/forms';
import { TodoList } from '../shared/todo-list';
import { TodoControllerService } from '../shared/todo-controller.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  dynamicPadding = 200;


  todo = new TodoList( 1, '', '', false );
  // TODO: Remove this when we're done
  // tslint:disable-next-line: typedef
  get diagnostic() { return JSON.stringify(this.todo); }

  constructor(
    private tdls: TodoControllerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  @ViewChild('todoForm', { static: true }) todoForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {// die Methode erählt als Argument den Paylaod des Events vom Type List
    this.tdls.createTodo(this.todo).subscribe(); // () => { //  aus dem TodoListeService wird die Methode create aufgerufen
    // der dahinter liegende HTTP Aufruf gibt ein Observable zurück, das wir subscriben
    alert('Ein neues Todo wurde erfolgreich estellt!');
    this.todoForm.reset();
  }
  ngOnInit(): void {
  }
}
