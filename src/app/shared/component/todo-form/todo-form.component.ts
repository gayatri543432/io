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

    if (this.todoForm) {
      this.todoForm.setValue({
        title: this.selectedTodo.title,
        completed: this.selectedTodo.completed
      });
    }
  }
  }

  onSubmit() {

     if (this.todoForm.valid) {

    let newObj: ITodo = {
     ...this.todoForm.value, id: Date.now().toString()
    };

    this.todoSubmit.emit(newObj);

    this.todoForm.reset()
  }
} 

  onUpdate() {
   if (this.todoForm.valid) {

    let todo: ITodo = {
      ...this.todoForm.value,
      id: this.selectedTodo.id
    };

    this.emitUpdate.emit(todo);

    this.todoForm.reset();
    this.isineditmode = false;
  }
  }
}