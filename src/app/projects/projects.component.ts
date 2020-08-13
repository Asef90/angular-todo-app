import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];

  trackById(index: number, project: Project): number {
     return project.id;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
