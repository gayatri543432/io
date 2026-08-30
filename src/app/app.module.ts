import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'

import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './shared/component/student/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student/student-form/student-form.component';
import { StudentListComponent } from './shared/component/student/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
