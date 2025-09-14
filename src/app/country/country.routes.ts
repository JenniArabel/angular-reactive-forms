import { Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countryRoutes: Routes = [
  {
    path: '', // Esto significa que la ruta la va a dar el sistema de ruta padre.
    component: CountryPageComponent,
  },
];
