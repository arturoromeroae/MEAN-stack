import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Steven', 100, 'Reebok', 'blancas', true),
            new Zapatilla('Marriot', 150, 'Puma', 'blancas', true),
            new Zapatilla('Stive', 100, 'Reebok', 'negras', false),
            new Zapatilla('Mike', 80, 'Puma', 'grises', true),
            new Zapatilla('Pedro', 97, 'Nike', 'blancas', true)
        ];
    }

    getTexto(){
        return "hola mundo";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
