import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string = "";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      console.log(this.nombre);

      if (this.nombre == 'ninguno') {
        this._router.navigate(['/home']);
      }
    });
  }

  redirect(){
    this._router.navigate(['/zapatillas']);
  }

}
