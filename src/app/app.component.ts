import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { plainToClass } from 'class-transformer'

import { ApiService } from './api.service';
import { NewTodoComponent } from "./new-todo/new-todo.component";
import { Project } from './project';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: Project[];
  categories: string[];
  todoCategory: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
      data: { categories: this.categories }
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.todoCategory = data.todoCategory || data.newCategory;
        this.createTodo(data.todoText);
      }
    );
  }

  getProjects(): void {
    this.apiService.getProjects()
        .subscribe(projects => {
          this.projects = projects;
          this.categories = projects.map(project => project.title);
        });
  }

  createTodo(todoText: string): void {
    this.apiService.createTodo(todoText, this.todoCategory)
        .subscribe(todo => {
          this.handleTodo(todo)
        })
  }

  handleTodo(todo: Todo): void {
    const project = this.projects.find(proj => proj.id === todo.projectId);

    if (project) {
      project.todos.push(todo);
    } else {
      const obj = { id: todo.projectId, title: this.todoCategory, todos: [todo] };

      this.projects.push(plainToClass(Project, obj as Object));
    }
  }

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProjects();
  }
}
