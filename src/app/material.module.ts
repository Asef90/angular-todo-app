import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
