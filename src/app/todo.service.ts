import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodoById(id: string) {
    return this.httpClient.get<Todo>("http://localhost:3000/todo/" + id);
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("http://localhost:3000/todo");
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>("http://localhost:3000/todo", todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`http://localhost:3000/todo/${todo.id}`, todo);
  }

  deleteTodo(id: number | undefined): Observable<Todo> {
    return this.httpClient.delete<Todo>("http://localhost:3000/todo/" + id);
  }
}








