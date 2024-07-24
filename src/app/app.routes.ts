import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todos',
    loadComponent: () => import('./features/todos/pages/todos-list/todos-list.component')
      .then(m => m.TodosListComponent)
  }
];
