import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetTodoListeInterface } from './get-todo-liste-interface';
import { retry, catchError } from 'rxjs/operators';
import { GetTodoListeBybenutzerid } from './get-todo-liste-bybenutzerid';
import { TodoList } from './todo-list';
import { BenutzerList } from './benutzer-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListeControllerService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodoListe(id: number): Observable<GetTodoListeInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
      params: new HttpParams()
    };
    return this.http.get<GetTodoListeInterface>(this.api + '/get/todoListe/' + id)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getAllTodoListe(): Observable<GetTodoListeInterface[]> {

    return this.http.get<GetTodoListeInterface[]>(this.api + '/get/all/todoListe')

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  // tslint:disable-next-line: max-line-length
  create(todoListe: GetTodoListeInterface): Observable<any> { // die Methode bekommt als Argument ein Objekt und liefert ein Observable zurück
    return this.http.post(          // die APi Liefert keine Daten zurück also kann man dem Observable den Typ any zuweisen
      `${this.api}/create/todoliste`,
      todoListe,
      { responseType: 'text' } // als Option geben wir an, dass die Antwort vom Server als Text kommt und ein leerer String ist
    ).pipe(
      catchError(this.errorHandler) // hier wird der Error abgefangen und unsere Methode aufgerufen
    );
  }

  deleteTodoListe(id: number): Observable<any> {
    return this.http.get<any>(this.api + '/delete/todoListe/' + id)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getTodoListeByBenutzerId(id: number): Observable<GetTodoListeBybenutzerid> {

    return this.http.get<GetTodoListeBybenutzerid>(this.api + '/get/todoListeByBenutzerId/' + id)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  addTodoToTodoListe(todo: TodoList, id: number): Observable<TodoList> {

    return this.http.post(`${this.api}/add/todo/${id}`,
    todo,
    { responseType: 'text' }
    )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  addBenutzerToTodoListe(benutzer: BenutzerList, id: number): Observable<TodoList> {

    return this.http.post(`${this.api}/add/benutzer/${id}`,
    benutzer,
    { responseType: 'text' }
    )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }



  deleteTodoFromTodoList(todoId: number, todoListeId: number): Observable<any> {

    return this.http.get<any>(`${this.api}/delete/todo/${todoId}/TodoListe/${todoListeId}`)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteBenutzerFromTodoList(todoId: number, todoListeId: number): Observable<any> {

    return this.http.get<any>(`${this.api}/delete/benutzer/${todoId}/TodoListe/${todoListeId}`)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }

}
