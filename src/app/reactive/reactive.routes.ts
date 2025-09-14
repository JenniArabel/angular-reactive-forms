import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos', // Opcional: Define el título de la página.
        component: BasicPageComponent,
      },
      {
        path: 'dynamic',
        title: 'Dinámicos', // Opcional: Define el título de la página.
        component: DynamicPageComponent,
      },
      {
        path: 'switches',
        title: 'Switches', // Opcional: Define el título de la página.
        component: SwitchesPageComponent,
      },
      { // Path comodín, para redirigir a una ruta por defecto.
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
