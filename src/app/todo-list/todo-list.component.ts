import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any;
  id: 3;

  constructor() {
    this.todos = [{
      id: 0,
      title: 'First TODO',
      completed: false
    }, {
      id: 1,
      title: 'Second TODO',
      completed: true
    }, {
      id: 2,
      title: 'Third TODO',
      completed: false
    }];
  }

  ngOnInit() {
  }

  onAddTodo(title) {
    console.log('adding todo', title);
    this.todos.push({
      id: this.id++,
      title,
      completed: false
    });
  }

}
