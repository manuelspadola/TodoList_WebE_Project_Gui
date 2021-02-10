import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TodoList } from './todo-list';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoControllerService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllTodo(id: number): Observable<TodoList[]> {

    return this.http.get<TodoList[]>(`${this.api}/get/all/todo/${id}`)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getTodo(id: number): Observable<TodoList> {

    return this.http.get<TodoList>(`${this.api}/get/todo/${id}`)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteTodo(id: number): Observable<TodoList> {

    return this.http.get<TodoList>(`${this.api}/delete/todo/${id}`)

      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

 createTodo(todo: TodoList): Observable<TodoList> {

    return this.http.post(`${this.api}/create/todo`,
    todo,
    { responseType: 'text' }
    )
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
