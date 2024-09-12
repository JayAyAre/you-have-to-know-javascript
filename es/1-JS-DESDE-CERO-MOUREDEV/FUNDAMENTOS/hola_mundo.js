// Este seria el hola mundo, y esto es un comentario en linea

/*
    Este seria el hola mundo, y esto es un comentario en bloque
*/

// Es multiparadigma, ya podemos usar diferentes paradigmas de programacion
// es un lenguaje interpretado, debilmente tipado, dinamico, orientado a objetos
// La mejor documentacion es la de MDN

console.log("Hola Mundo");

// en la web de mdn, existen los primeros pasos con javascript

// Variables

// Inicialmente se usaba el var
// Ademas, tengamos en cuenta que usamos camelCase, a diferencia de python por ejemplo que usa snake_case

var holaMundo = "Hola Mundo";
console.log(holaMundo);

var myString = 'Hola Mundo';
console.log(myString);

// Actualmente, podemos usar var pero tiene varios problemas, como lo siguiente
function test() {
    console.log(myString2);
}

test();

var myString2 = 'Hola Mundo';

// Podemos ver que se ejecuto el codigo, aunque hayamos definido despues de llamarla
// y al ejecutarlo obtengo undefined. Siempre que definimos var, es global, y puede aparecer el hoisting
// El hoisting sucede cuando definimos una variables y antes de definirla, la llamamos como si ya existiera
// De alguna manera la variable ya tiene un valor antes de definirla
// Para arreglar esto usamos let, esta solo se ejecuta donde la definimos, asi tenemos un solo scope

let myString3 = 'Hola Mundo';
console.log(myString3);
myString3 = 'Cambio el valor de la variable';
console.log(myString3);

function test2() {
    console.log(myString3); // Aqui podemos usar la variable definida con let unicamente porque estamos en un archivo
    var myVar = 'Hola Mundo desde var';
    let myLet = 'Hola Mundo desde let';
}

test2();

// console.log(myVar); en estas dos lineas obtengo undefined, ya que estan en el scope de la funcion
// console.log(myLet);

let myLet = 5
console.log(myLet)
myLet = "hola"
console.log(myLet)

