import {Component} from '@angular/core';
import {TodoListComponent} from './todo-list.component';
import {TodoCreateComponent} from './todo-form.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';


@RouteConfig([
  {path: '/list', name: 'List', component: TodoListComponent, useAsDefault: true},
  {path: '/new', name: 'Form', component: TodoCreateComponent}
])

@Component({
    selector: 'my-app',
    styles: ['p {color: red}'],
    directives: [TodoListComponent, ROUTER_DIRECTIVES],
    template: `
    <header>
      <nav>
        <a [routerLink]="['List']">List</a>
        <a [routerLink]="['Form']">Create Todo</a>
      </nav>
    </header>
    <main>
    <router-outlet></router-outlet>
    </main>
    `
})
export class AppComponent {

}




