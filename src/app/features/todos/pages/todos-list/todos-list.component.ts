import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {

  constructor(
    private todosService: TodosService
  ) {}

  getAllTodos() {
    return this.todosService.getAllTodos();
  }
}
