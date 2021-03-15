import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesServices
  ) {
    this.userId = 1;
  }

  ngOnInit() {
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
