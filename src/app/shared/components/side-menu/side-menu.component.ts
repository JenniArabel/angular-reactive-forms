import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];
// reactiveItems es un array de rutas hijas, si no hay rutas hijas, será un array vacío.
// reactiveRoutes[0] es la primera ruta del array de rutas reactivas.

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
    }));
  /** ReactiveMenu
   * Está transformando rutas de Angular
   * en elementos de menú
   * para mostrarlos en la navegación lateral de la aplicación.
   *
   * reactiveItems: Es un array que contiene las rutas hijas del módulo reactive
   * filter: Filtra las rutas para excluir aquellas cuyo path es '**' (ruta comodín para páginas no encontradas).
   * map: Transforma cada ruta restante en un objeto con las propiedades route y title.
   * route: Construye la ruta completa concatenando 'reactive/' con el path de la ruta.
   * title: Toma el título definido en la ruta para mostrar en el menú.
   */

  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];

  countryMenu: MenuItem[] = [
    {
      title: 'Países',
      route: './country',
    },
  ];
}
