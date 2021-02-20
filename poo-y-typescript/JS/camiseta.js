// clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this;
    };
    return Camiseta;
}());
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
