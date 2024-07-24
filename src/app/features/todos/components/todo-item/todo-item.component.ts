import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  isOpened = false;

  toggleTodoContent() {
    this.isOpened = !this.isOpened;
  }

  toggleIsCompleted() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }
}
