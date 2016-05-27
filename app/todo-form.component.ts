import {Component} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'todo-form',
  template: `<form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <p><input type="text" 
            name="todoName" 
            ngControl="todoName" 
            [(ngModel)]="newTodo.name" 
            placeholder="Todo Name" 
            required 
            #todoName="ngForm"> 
            <button type="submit">Create</button></p>
            <p *ngIf="todoName.dirty && !todoName.valid">Not valid!</p>

  </form>`,
  styles: [
    '.ng-dirty.ng-invalid {border:1px solid red}'
  ],
  providers: [TodoService]
})

export class TodoCreateComponent {
  constructor(private _todoService: TodoService) {}
  private newTodo = {name: '', is_done: false};
  onSubmit() {
    this._todoService.create(this.newTodo);
  }
}
