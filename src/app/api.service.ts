import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer'


import { Project } from './project';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiBase = "https://todo-oblako.herokuapp.com/"

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

  createTodo(todo, name) {
    const url = `${this._apiBase}/todos`;
    const body = { 'todo': { 'text': todo }, 'project': { 'title': name } }

    return this.http.post(url, body, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Todo, res['todo'] as Object)),
                      tap(res => console.log(res)));
  }

  updateTodo(todo) {
    const url = `${this._apiBase}/projects/${todo.project_id}/todos/${todo.id}`;


    return this.http.put(url, todo, this.httpOptions)
                    .pipe(
                      map(res => plainToClass(Todo, res['todo'] as Object)),
                      tap(res => console.log(res)));
  }

  constructor(private http: HttpClient) { }
}
