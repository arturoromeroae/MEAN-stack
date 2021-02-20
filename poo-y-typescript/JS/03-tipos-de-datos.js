var test = 'casa';
var test_2 = 12;
console.log(test, test_2);
// string
var cadena = 'Arturo Romero';
//number
var edad = 27;
//boolean
var verdadero_falso = true;
// any cualquier tipo de valor
var cualquier = 'perro';
// arrays
var lenguajes = ['PHP', 'JS', 'CSS', 12];
var years = [12, 23, 48];
// let vs var
var numero1 = 10;
var numero2 = 20;
if (numero1 == 10) {
    var numero1_1 = 44; // solo funciona a nivel de bloque
    var numero2 = 55; // funciona a nivel global
    console.log('dentro del if: ' + numero1_1, numero2);
}
console.log('fuera del if: ' + numero1, numero2);
console.log(cadena, edad, verdadero_falso, cualquier, lenguajes, years);
