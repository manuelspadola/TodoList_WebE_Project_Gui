import { Component, OnInit } from '@angular/core';
import { BenutzerControllerService } from '../shared/benutzer-controller.service';
import { BenutzerList, GetTodoListeInterface } from '../shared/get-todo-liste-interface';


@Component({
  selector: 'app-get-all-benutzer',
  templateUrl: './get-all-benutzer.component.html',
  styleUrls: ['./get-all-benutzer.component.css']
})
export class GetAllBenutzerComponent implements OnInit {

  callId: any ;
  foundTodoList?: BenutzerList[];
  dynamicPadding = 400;


  constructor(private todolistecontrollerservice: BenutzerControllerService) {
  }

  ngOnInit(): void {
}
  // tslint:disable-next-line: typedef
  public doIdCall() {
    this.todolistecontrollerservice.getAllBenutzer().subscribe(benutzerlist => this.foundTodoList = benutzerlist);
  }
}
