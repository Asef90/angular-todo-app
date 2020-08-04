import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() updateTodoEvent = new EventEmitter();

  updateTodo(todo) {
    this.updateTodoEvent.emit(todo);
  }

  // updateTodo(todo) {
  //   const updateTodo = this.todos.find(elem => elem.id === todo.id)
  //   console.log(updateTodo);
  //
  //   todo.isCompleted = !todo.isCompleted;
  //
  //   this.apiService.updateTodo(todo)
  //       .subscribe(res => console.log(res));
  // }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
