import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  personas = [
  {
    nombre: 'Ana',
    apellido: 'Martínez',
    dni: '11111a'
  },
  {
    nombre: 'Pedro',
    apellido: 'Sánchez',
    dni: '22222b'
  },
  {
    nombre: 'Miguel',
    apellido: 'Pérez',
    dni: '3333c'
  }
  ];

  abrirYoube(){
    window.open('https://www.youtube.com/');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hola, soy tu tostada.',
      duration: 2000
    });
    toast.present();
  }
  constructor(public toastController: ToastController) {}

  ngOnInit() {
  }

}
