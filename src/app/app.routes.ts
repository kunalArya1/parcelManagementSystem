import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./Page/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./Page/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'register',
    loadComponent: () => {
      return import('./Page/register/register.component').then(
        (m) => m.RegisterComponent
      );
    },
  },
];
