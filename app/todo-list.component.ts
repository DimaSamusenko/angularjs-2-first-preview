import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoItemInterface} from './todo-item.interface';

@Component({
  selector: 'todo-list',
  template: `
  <ul>
    <li *ngFor="let item of todos">
    <input type="checkbox" [(ngModel)]="item.is_done">
    {{item.name}} <button type="button" (click)="remove(item)">X</button>
    </li>
  </ul>
  `,
  styles:['ul {list-style:none; padding:0}'],
  providers: [TodoService]
})

export class TodoListComponent implements OnInit {
  constructor(private _todoService: TodoService) {}

  public todos: TodoItemInterface[];

  getTodos() {
    this._todoService.list()
      .then((todos: TodoItemInterface[]) => this.todos = todos)
  }

  remove(todo:any) {
    this._todoService.remove(todo);
  }

  ngOnInit():any {
    this.getTodos();
  }
}
