import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  enlacesPaginas = [
    {
      icono: 'boat',
      ruta: '/pagina1',
      titulo: 'página 1'
    },
    {
      icono: 'airplane',
      ruta: '/pagina2',
      titulo: 'página 2'
    }
  ];
  
  name = 'Luis';
  url = 'https://www.google.com';
  activo = false;
  poblacion = 'Madrid';
  codigoPostal = '28009';

 

  constructor() {}
}
