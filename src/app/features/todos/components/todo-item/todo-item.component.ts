import { Component, Input, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo';
import { NgClass } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoFormGroup } from '../../models/TodoFormGroup';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editModal') modal!: TemplateRef<any>;
  isOpened = signal(false);
  formGroup!: FormGroup<TodoFormGroup>;

  constructor(private todosService: TodosService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.nonNullable.group({
      title: this.fb.nonNullable.control(this.todo.title, [Validators.required]),
      content: this.fb.nonNullable.control(this.todo.content)
    });
  }

  toggleTodoContent() {
    this.isOpened.set(!this.isOpened());
  }

  toggleIsCompleted() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  deleteItem() {
    this.todosService.deleteTodo(this.todo.id);
  }

  editItem() {
    const todo: Todo = {
      ...this.todo,
      ...this.formGroup.value
    }
    this.todosService.updateTodo(todo);
    this.modalService.dismissAll();
  }

  openEditModal() {
    this.modalService.open(this.modal);
  }
}
