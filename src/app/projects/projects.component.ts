import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Project } from '../project';
import { Todo } from '../todo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  getProjects(): void {
    this.apiService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

  handleChange(todo) {
    const todoCopy = { ...todo, isCompleted: !todo.isCompleted };

    this.apiService.updateTodo(todoCopy)
        .subscribe(res => todo.isCompleted = res.isCompleted);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProjects();
  }
}
