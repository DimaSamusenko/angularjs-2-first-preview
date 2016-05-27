import {Injectable} from '@angular/core';
import {TodoItemInterface} from './todo-item.interface';

@Injectable()

export class TodoService {
  public todos = TODOS;

  list() {
    return Promise.resolve(this.todos);
  }
  create(todo:any) {
    TODOS.push(todo);
  }
  remove(todo:any) {
    
  }
}

var TODOS: TodoItemInterface[] = [
  {name: 'Выгулять собаку', is_done: false},
  {name: 'Купить продукты', is_done: false},
  {name: 'Уборка', is_done: false}
];
