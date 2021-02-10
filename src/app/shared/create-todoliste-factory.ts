import { GetTodoListeInterface } from './get-todo-liste-interface';

export class CreateTodolisteFactory {
  static empty(): GetTodoListeInterface { // mit der Methode empty wird ein leers TodoListe Objekt (Datenmodell) übergeben
    return {
      id: 0,
      titel: '',
      todoList: [
        { id: 0, titel: '', text: '', erledigt: false}
      ],
      benutzerList: [
        { id: 0, name: '' }
      ]
    };
  }
}
