import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();

  todoTitle;
  constructor() { }

  ngOnInit() {
  }

  onAddTodo(title) {
    console.log('TODO-', title);
    this.addTodo.emit(title);
    this.todoTitle = '';
  }
}
