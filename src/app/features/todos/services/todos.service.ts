import { Injectable, signal } from "@angular/core";
import { Todo } from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Todo One Title',
      content: 'Lorem ipsum dolor sit amet.',
      isCompleted: false
    }
  ])

  getAllTodos() {
    return this.todos();
  }

  addTodo(todo: any) {
    const newTodo: Todo = {
      id: this.todos()[this.todos().length - 1].id + 1,
      isCompleted: false,
      ...todo
    }
    this.todos.update(todos => [...todos, newTodo]);
  }
}
