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
    public mi_marca: string;

    constructor(){
        this.mi_marca = 'fila';
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Steven', 100, 'Reebok', 'blancas', true),
            new Zapatilla('Marriot', 150, 'Puma', 'blancas', true),
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

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index: any){
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("has salido del input");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}
