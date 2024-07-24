import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoFormGroup } from '../../models/TodoFormGroup';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
  formGroup!: FormGroup<TodoFormGroup>;

  constructor(
    private fb: FormBuilder,
    private todosService: TodosService,
    private router: Router
  ) {
    this.formGroup = this.fb.nonNullable.group({
      title: this.fb.nonNullable.control('', [Validators.required]),
      content: this.fb.nonNullable.control('')
    })
  }

  submit() {
    this.todosService.addTodo(this.formGroup.value);
    this.router.navigate(['/todos']);
  }
}
