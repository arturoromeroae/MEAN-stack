var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('camiseta estampada con el logo de ' + logo);
        };
    };
}
// clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    // metodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this;
    };
    Camiseta = __decorate([
        estampar('gucci')
    ], Camiseta);
    return Camiseta;
}());
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta('rojo', 'manga corta', 'puma', 'l', 100);
console.log(camiseta);
var sudadera_adidas = new Sudadera('rojo', 'manga corta', 'puma', 'l', 100);
sudadera_adidas.setCapucha(true);
sudadera_adidas.setColor('naranja');
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
