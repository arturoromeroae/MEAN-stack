export class Zapatilla{
    // public nombre: string;
    // public precio: number;
    // public marca: string;
    // public color: string;
    // public stock: boolean;

    // constructor(nombre, marca, precio, color, stock){
    //     this.nombre = nombre;
    //     this.marca = marca;
    //     this.precio = precio;
    //     this.color = color;
    //     this.stock = stock;
    // }

    // esto es equivalente al codigo de arriba
    constructor(
        public nombre: string,
        public precio: number,
        public marca: string,
        public color: string,
        public stock: boolean
    ){}
}