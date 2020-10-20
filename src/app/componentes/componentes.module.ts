import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CabeceraComponent],
  exports: [CabeceraComponent], // para poder utilizarlo fuera del módulo (el módulo es la carpeta componentes)
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
