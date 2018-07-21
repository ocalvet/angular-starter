import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: any;

  constructor() {
    this.list = [{
      id: '123',
      title: 'First TODO',
      completed: false
    }, {
      id: '124',
      title: 'Second TODO',
      completed: true
    }, {
      id: '125',
      title: 'Third TODO',
      completed: false
    }];
  }

  ngOnInit() {
  }

}
