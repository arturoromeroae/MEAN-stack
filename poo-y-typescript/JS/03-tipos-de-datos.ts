// datos personalizados
type alfanumerico = string | number;
let test: alfanumerico = 'casa';
let test_2: alfanumerico = 12;

console.log(test, test_2);

// string
let cadena: string | number = 'Arturo Romero';

//number
let edad: number = 27;

//boolean
let verdadero_falso: boolean = true;

// any cualquier tipo de valor
let cualquier: any = 'perro';

// arrays
var lenguajes: Array<any> = ['PHP', 'JS', 'CSS', 12];

let years: number[] = [12, 23, 48];

// let vs var
var numero1 = 10;
var numero2 = 20;

if (numero1 == 10) {
    let numero1 = 44; // solo funciona a nivel de bloque
    var numero2 = 55; // funciona a nivel global

    console.log('dentro del if: ' + numero1, numero2);
}

console.log('fuera del if: ' + numero1, numero2);

console.log(cadena, edad, verdadero_falso, cualquier, lenguajes, years);