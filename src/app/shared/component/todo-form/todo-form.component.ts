import {   Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { ITodo } from "../../model/todo.interface";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})


export class TodoFormComponent implements OnInit {

  title!: string;
  completed!: boolean;
  isineditmode: boolean = false;
  @ViewChild('todoForm') todoForm!:NgForm
  @Input() selectedTodo!: ITodo;

  @Output() todoSubmit = new EventEmitter<ITodo>();
  @Output() emitUpdate = new EventEmitter<ITodo>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['selectedTodo'] && this.selectedTodo) {

      this.isineditmode = true;

      this.title = this.selectedTodo.title;
      this.completed = this.selectedTodo.completed;
    }
  }

  onSubmit() {

    let newObj: ITodo = {
      id: Date.now().toString(),
      title: this.title,
      completed: this.completed
    };

    this.todoSubmit.emit(newObj);

    this.title = '';
    this.completed = false;
  }

  onUpdate() {

    let todo: ITodo = {
      id: this.selectedTodo.id,
      title: this.title,
      completed: this.completed
    };

    this.emitUpdate.emit(todo);

    this.todoForm.reset()
    this.isineditmode = false;
  }
}