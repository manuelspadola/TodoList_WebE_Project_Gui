import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, NgForm } from '@angular/forms';
import { BenutzerList } from '../shared/benutzer-list';
import { TodoListeControllerService } from '../shared/todo-liste-controller.service';

@Component({
  selector: 'app-add-benutzer-to-todo-liste',
  templateUrl: './add-benutzer-to-todo-liste.component.html',
  styleUrls: ['./add-benutzer-to-todo-liste.component.css']
})
export class AddBenutzerToTodoListeComponent implements OnInit {
  callId: any;
  dynamicPadding = 100;


  benutzer = new BenutzerList(1, '', '');
  // TODO: Remove this when we're done
  // tslint:disable-next-line: typedef
  get diagnostic() { return JSON.stringify(this.benutzer); }

  constructor(
    private tdls: TodoListeControllerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  @ViewChild('benutzerForm', { static: true }) benutzerForm!: NgForm;
  // tslint:disable-next-line: typedef
  public submitForm() {// die Methode erählt als Argument den Paylaod des Events vom Type List
    // tslint:disable-next-line: max-line-length
    this.tdls.addBenutzerToTodoListe(this.benutzer, this.callId).subscribe(); // () => { //  aus dem TodoListeService wird die Methode create aufgerufen
    // der dahinter liegende HTTP Aufruf gibt ein Observable zurück, das wir subscriben
    alert('Ein neuer Benutzer wurde erfolgreich hinzugefügt!');
    this.benutzerForm.reset();
  }
  ngOnInit(): void {
  }
}
