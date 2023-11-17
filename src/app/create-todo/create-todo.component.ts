import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo-model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private router: Router) { }

  public title: string = ""
  public description: string = ""
  public dueDate!: Date
  public priority: string = ""
  public status: string = ""
  public notes: string = ""

  public todoService: TodoService = inject(TodoService);

  public createTodo(): void {
    const todo : Todo = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      status: this.status,
      notes: this.notes,
    };

    this.todoService.createTodo(todo).subscribe(() => {
      this.title = "";
      this.description = "";
      this.dueDate!;
      this.priority = "";
      this.status = "";
      this.notes = "";
    }
    )

    this.router.navigate(['todoList']);

  }

  public navigateMain() {
    this.router.navigate(["main"]);
  }
}
