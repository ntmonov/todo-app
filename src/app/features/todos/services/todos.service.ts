import { Injectable } from "@angular/core";
import { Todo } from "../models/Todo";

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Todo One Title',
      content: 'Lorem ipsum dolor sit amet.',
      isCompleted: false
    }
  ]

  getAllTodos() {
    return this.todos;
  }
}
