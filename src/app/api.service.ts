import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer'


import { Project } from './project';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiBase = "http://localhost:3000"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProjects() {
    const url = `${this._apiBase}/projects`;

    return this.http.get(url)
                    .pipe(
                      map(res => plainToClass(Project, res['projects'] as Object[])),
                      tap(_ => console.log(_)));
  }

  createTodo(todo) {
    const url = `${this._apiBase}/todos`;

    return this.http.post(url, todo, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Project, res['projects'] as Object)),
                      tap(res => console.log(res)));
  }

  updateTodo(todo) {
    const url = `${this._apiBase}/projects/${todo.project_id}/todos/${todo.id}`;

    return this.http.put(url, todo, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Todo, res['todo'] as Object)));
  }

  constructor(private http: HttpClient) { }
}


// mock_todos: Todo[] = [
//   { id: 1, text: 'Todo 1', isCompleted: false, projectId: 1 },
//   { id: 2, text: 'Todo 2', isCompleted: false, projectId: 1 },
//   { id: 3, text: 'Todo 3', isCompleted: false, projectId: 1 }
// ];
//
// projects: Project[] = [
//   { id: 1, title: 'First project', todos: this.mock_todos },
//   { id: 2, title: 'Second project', todos: this.mock_todos },
//   { id: 3, title: 'Third project', todos: this.mock_todos }
// ];
