import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routes').then((m) => m.reactiveRoutes),
    // Ruta perezosa (lazy loading)
    // m de módulo
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    // En este caso no es necesario el .then porque auth.routes tiene una exportación por defecto.
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.routes').then((m) => m.countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
