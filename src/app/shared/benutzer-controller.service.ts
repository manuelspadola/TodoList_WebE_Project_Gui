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
export class BenutzerControllerService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllBenutzer(): Observable<BenutzerList[]> {

    return this.http.get<BenutzerList[]>(this.api + '/get/all/benutzer')

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteTodoListeBenutzer(benutzerId: number): Observable<any> {

    return this.http.get<any>(`${this.api}/delete/benutzer/${benutzerId}`)

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
