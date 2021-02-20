// clase (molde del objeto)
class Camiseta{

    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this
    }

}

var camiseta = new Camiseta();
camiseta.setColor('morado');
camiseta.getColor();



// camiseta.color = 'rojo';
// camiseta.modelo = 'manga larga';
// camiseta.marca = 'adidad';
// camiseta.talla = 's';
// camiseta.precio = 10;

var playera = new Camiseta();
playera.setColor('marron');
playera.getColor();

// playera.color = 'azul';
// playera.modelo = 'manga corta';
// playera.marca = 'nike';
// playera.talla = 'xs';
// playera.precio = 30;

console.log(camiseta.getColor(), playera.getColor());
