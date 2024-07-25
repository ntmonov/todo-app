import { Injectable, signal } from "@angular/core";
import { Todo } from "../models/Todo";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

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
  ]);

  constructor(private http: HttpClient) { }

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
      };
    } else {
      newTodo = {
        id: 1,
        isCompleted: false,
        ...todo
      };
    }
    this.todos.update(todos => [...todos, newTodo]);
  }

  deleteTodo(id: number) {
    this.todos.update(todos => {
      const newTodos: Todo[] = todos.filter(t => t.id !== id);
      return newTodos;
    });
  }

  fetchTodos() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(response => {
          return response.map((fetchedTodo: any) => {
            const todo: Todo = {
              id: fetchedTodo.id,
              title: fetchedTodo.title,
              content: 'no-content',
              isCompleted: fetchedTodo.completed
            }

            return todo;
          }).splice(0, 5)
        })
      )
      .subscribe(todos => {
        this.todos.set(todos);
      });
  }

  getTodoCount() {
    return this.todos().length;
  }

  updateTodo(todo: Todo) {
    const todoIndexToUpdate = this.todos().findIndex(t => t.id === todo.id);

    this.todos.update(todos => {
      todos.splice(todoIndexToUpdate, 1, todo);
      return todos;
    })
  }
}
