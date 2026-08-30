import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todosArr!:ITodo[]
   @Output() emitEdit = new EventEmitter<ITodo>();
  @Output() emitRemove = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
   OnEdit(todo: ITodo) {
    
    this.emitEdit.emit(todo);
  }

  onRemove(id: string) {
    this.emitRemove.emit(id);
  }
}
