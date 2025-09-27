import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const authRoutes: Routes = [ // export default en vez de colocarlo al final
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];

export default authRoutes; // Exportación por defecto (opcional)
