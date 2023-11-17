import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo-model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public searchTerm: string = "";

  constructor(public todoservice: TodoService, private router: Router) { }


  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(response => { this.todos = response })
  }

  public navigateCreate() {
    this.router.navigate(['createTodo'])
  }

  public deleteTodo(id: number | undefined): void {
    this.todoservice.deleteTodo(id).subscribe(() => { console.log("Successfully deleted") })
  }

  public filterTodos(): void {
    this.todoservice.getTodos().subscribe((response: Todo[]) => {
      this.todos = response.filter(todo => todo.status === "not started yet")
    });
  }

  public searchTodo(): void {
    this.todoservice.getTodos().subscribe((response: Todo[]) => {
      this.todos = response.filter(todo => todo.title.toLocaleLowerCase().includes(this.searchTerm) || todo.description.toLocaleLowerCase().includes(this.searchTerm))
    });
  }

  public navigateToEdit(id: number | undefined): void {
    // edit/1
    this.router.navigate(['edit', id])
  }
}