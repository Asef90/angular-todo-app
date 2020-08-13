import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer'

import { environment } from 'src/environments/environment';
import { Project } from './project';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiBase = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProjects(): Observable<Project[]> {
    const url = `${this._apiBase}/projects`;

    return this.http.get(url)
                    .pipe(
                      map(res => plainToClass(Project, res['projects'] as Object[])));
  }

  createTodo(todoText: string, projectTitle: string): Observable<Todo> {
    const url = `${this._apiBase}/todos`;
    const body = { 'todo': { 'text': todoText }, 'project': { 'title': projectTitle } }

    return this.http.post(url, body, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Todo, res['todo'] as Object)));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this._apiBase}/projects/${todo.projectId}/todos/${todo.id}`;


    return this.http.put(url, todo, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Todo, res['todo'] as Object)));
  }

  constructor(private http: HttpClient) { }
}
