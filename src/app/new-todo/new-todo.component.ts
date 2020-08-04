import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  todoText: string;
  todoCategory: string;
  newCategory: string;
  categories: string[]
}

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {
  todoText: string;
  todoCategory: string;
  newCategory: string;
  categories;

  constructor(
    public dialogRef: MatDialogRef<NewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.data);
  }
}
