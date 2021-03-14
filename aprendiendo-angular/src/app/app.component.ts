import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }
  
  ocultarVideojuegos(value: any){
    this.mostrar_videojuegos = value;
  };
}
