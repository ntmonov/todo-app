import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../../features/todos/services/todos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public todosService: TodosService) {}
}
