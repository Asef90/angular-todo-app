import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../api.service';
import { Project } from '../project';
import { Todo } from '../todo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];


  constructor() { }

  ngOnInit(): void {
  }
}
