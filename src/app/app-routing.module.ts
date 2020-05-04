import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'novidades',
        loadChildren: () => import('./pages/novidades/novidades.module').then(m => m.NovidadesModule)
      },
      {
        path: 'feminino',
        loadChildren: () => import('./pages/feminino/feminino.module').then(m => m.FemininoModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
