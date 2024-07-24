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
    let newTodo: Todo;

    if (this.todos().length) {
      newTodo = {
        id: this.todos()[this.todos().length - 1].id + 1,
        isCompleted: false,
        ...todo
      }
    } else {
      newTodo = {
        id: 1,
        isCompleted: false,
        ...todo
      }
    }
    this.todos.update(todos => [...todos, newTodo]);
  }

  deleteTodo(id: number) {
    this.todos.update(todos => {
      const newTodos: Todo[] = todos.filter(t => t.id !== id);
      return newTodos;
    })
  }
}
