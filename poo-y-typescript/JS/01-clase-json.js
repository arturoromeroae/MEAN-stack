var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velocidadMaxima: '60 km',
    cambiaColor: function (nuevo_color) {
        // bicicleta.color = nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("amarillo");
