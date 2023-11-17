import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-start',
  templateUrl: './todo-start.component.html',
  styleUrls: ['./todo-start.component.css']
})
export class TodoStartComponent {

  constructor(private router: Router) { }

  public navigateCreate() {
    this.router.navigate(['createTodo'])
  }

  public navigateList() {
    this.router.navigate(['todoList'])
  }
}
