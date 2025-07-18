import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: 'home',
    loadComponent: () => import('./page/home/home').then((h) => h.Home),
  },
  {
    path: 'heroes',
    loadComponent: () => import('./page/heroes/heroes').then((h) => h.Heroes),
  },
];
