import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  activo = true;
  titulo = 'BINDING LIST';
  item1 = 'mi primer item';
  item2 = 'mi segundo item';
  inputBanana = 'plátanos';
  constructor() { }

  ngOnInit() {
  }

}
