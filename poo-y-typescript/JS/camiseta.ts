// interfaz
interface CamisetaBase{
    setColor(color);
    getColor();
}

// decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('camiseta estampada con el logo de ' + logo);
        }
    }
}

// clase (molde del objeto)
@estampar('gucci')
class Camiseta implements CamisetaBase{

    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this
    }

}

// clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta('rojo', 'manga corta', 'puma', 'l', 100);
console.log(camiseta);
camiseta.estampacion();

var sudadera_adidas = new Sudadera('rojo', 'manga corta', 'puma', 'l', 100);
sudadera_adidas.setCapucha(true);
sudadera_adidas.setColor('naranja')
console.log(sudadera_adidas);

// camiseta.setColor('morado');
// camiseta.getColor();



// camiseta.color = 'rojo';
// camiseta.modelo = 'manga larga';
// camiseta.marca = 'adidad';
// camiseta.talla = 's';
// camiseta.precio = 10;

// var playera = new Camiseta();
// playera.setColor('marron');
// playera.getColor();

// playera.color = 'azul';
// playera.modelo = 'manga corta';
// playera.marca = 'nike';
// playera.talla = 'xs';
// playera.precio = 30;
