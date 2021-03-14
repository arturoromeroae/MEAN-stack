import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;

    constructor(){
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Steven', 100, 'Reebok', 'blancas', true),
            new Zapatilla('Stive', 100, 'Reebok', 'negras', false),
            new Zapatilla('Mike', 80, 'Puma', 'grises', true),
            new Zapatilla('Pedro', 97, 'Nike', 'blancas', true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);

        this.getMarcas()
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);   
            }
        });
        console.log(this.marcas);
    }
}
