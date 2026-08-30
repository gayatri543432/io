import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../model/todo.interface';
import { todos } from '../../const/todo';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoArr: Array<ITodo> = todos;
  selectedTodo!: ITodo;

  constructor(
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {}


  todoSubmit(todo: ITodo) {

    this.todoArr.push(todo);

    this.snackBarService.openSnackbar(
      'Todo added successfully'
    );
  }

  
  onEdit(todo: ITodo) {
    this.selectedTodo = todo
  }


  onUpdate(todo: ITodo) {

    const getIndex = this.todoArr.findIndex(
      item => item.id === todo.id
    );

    if (getIndex !== -1) {

      this.todoArr[getIndex] = todo;

      this.snackBarService.openSnackbar(
        'Todo Updated successfully'
      );
    }
  }

 
onRemove(id: string) {

  const isConfirm = confirm('Are you sure you want to remove this Todo?');

  if (isConfirm) {

    this.todoArr = this.todoArr.filter(
      todo => todo.id !== id
    );

    this.snackBarService.openSnackbar(
      'Todo Removed successfully'
    );
  }
}
}