import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'

import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  updateTodo(todo: Todo): void {
    const todoCopy = { ...todo, isCompleted: !todo.isCompleted };

    this.apiService.updateTodo(todoCopy)
        .subscribe(res => todo.isCompleted = res.isCompleted);
  }

  trackById(index: number, todo: Todo): number {
     return todo.id;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
