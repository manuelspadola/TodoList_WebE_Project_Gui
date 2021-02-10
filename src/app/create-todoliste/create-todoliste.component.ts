import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, NgForm } from '@angular/forms';
import { GetTodoListeInterface } from '../shared/get-todo-liste-interface';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';


@Component({
  selector: 'app-create-todoliste',
  templateUrl: './create-todoliste.component.html',
  styleUrls: ['./create-todoliste.component.css']
})
export class CreateTodolisteComponent implements OnInit {

  dynamicPadding = 100;


  todoListe = new GetTodoListeInterface(15, '', [{ id: 1, titel: '', text: '', erledigt: false }], [{ id: 1, name: '', password: '' }]);
  // TODO: Remove this when we're done
  // tslint:disable-next-line: typedef
  get diagnostic() { return JSON.stringify(this.todoListe); }

  constructor(
    private tdls: TodoListeControllerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  @ViewChild('todoListeForm', { static: true }) todoListeForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {// die Methode erählt als Argument den Paylaod des Events vom Type List
    this.tdls.create(this.todoListe).subscribe(); // () => { //  aus dem TodoListeService wird die Methode create aufgerufen
    // der dahinter liegende HTTP Aufruf gibt ein Observable zurück, das wir subscriben
    alert('Ein neue Todo Liste wurde erfolgreich estellt!');
    this.todoListeForm.reset();
  }
  ngOnInit(): void {
  }
}
