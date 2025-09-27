import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}
// Define la estructura que debe tener cada elemento del menú.

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
   * Es un menú dinámico.
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
  /** AuthMenu
   * Menú harcodeado igual que countryMenu
   * Contiene los elementos de menú para la sección de autenticación.
   * title: El título que se mostrará en el menú (en este caso, 'Registro').
   * route: La ruta a la que se navegará cuando se seleccione este elemento del menú (en este caso, './auth').
   * 1 sóla opción en el menú. Pero si hubiera más, se añadirían como objetos adicionales en el array.
   */

  countryMenu: MenuItem[] = [
    {
      title: 'Países',
      route: './country',
    },
  ];
}
