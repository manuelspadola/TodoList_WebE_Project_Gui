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
