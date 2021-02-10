export class GetTodoListeBybenutzerid {
  id: number;
  titel: string;
  todoList: TodoList[];
  benutzerList: BenutzerList[];
  constructor(id: number, titel: string, todoList: TodoList[], benutzerList: BenutzerList[]) {
    this.id = id;
    this.titel = titel;
    this.todoList = todoList;
    this.benutzerList = benutzerList;
  }
}

export class TodoList {
id: number;
titel: string;
text: string;
erledigt: boolean;
constructor(id: number, titel: string, text: string, erledigt: boolean){
  this.id = id;
  this.titel = titel;
  this.text = text;
  this.erledigt = erledigt;
  }
}

export class BenutzerList {
id: number;
password: string;
name: string;
constructor(id: number, password: string, name: string){
  this.id = id;
  this.password = password;
  this.name = name;
  }
}
