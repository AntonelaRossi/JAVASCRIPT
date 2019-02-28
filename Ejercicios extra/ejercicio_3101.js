//Ej 1

var jsEsLoMas = true;
var supermanMejorQueBatman = false;
var calculoCorrecto = true;
var pentagonoCon6Lados= false;

console.log("¿Javascript es el mejor lenguaje?", jsEsLoMas);
console.log("¿Es Superman mejor que Batman?", supermanMejorQueBatman);
console.log("¿Es 1 + 1 = 2?", calculoCorrecto);
console.log("¿Un pentágono tiene 6 lados?", pentagonoCon6Lados);

// Ej 2
var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio *15/100;
var total = precio + impuestos;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + total);

//Ej 3

var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio *15/100;
var cantidad = 9
var total = (precio + impuestos )* cantidad;


console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + total);

//Ej 4


var resto;
resto = 11 % 3;

console.log(resto);


//Ej 5

var a = 9;
var b = 17;
var c = 38;

var restoDeADividaPor3 = a % 3 ; // COMPLETAR ESTA LINEA
var restoDeBDividaPor5 = b % 5 // COMPLETAR ESTA LINEA
var restoDeCDividaPor8 = c % 8; // COMPLETAR ESTA LINEA

console.log("El resto de dividir a por 3 es ", restoDeADividaPor3);
console.log("El resto de dividir b por 5 es ", restoDeBDividaPor5);
console.log("El resto de dividir c por 8 es ", restoDeCDividaPor8);

//Ej 6
var unNumero = 99;

unNumero++;

console.log(unNumero);

//Ej 7

var unNumero = 43;

unNumero += 2;

console.log(unNumero);

// Ej 8

var unNumero = 27;

unNumero--;

console.log(unNumero);

// Ej 9

var a = 3;
var b = 17;
var c = 12;

// modificar las 3 expresiones que siguen a continuación

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);

// Ej 10

var a = 11;
var b = 9;
var c = 3;

// modificar las 3 expresiones que siguen a continuación

a -= 6;
b -= 15;
c -= 1;

console.log(a);
console.log(b);
console.log(c);

// Ej 11

var a = 5;
var b = 12;
var c = 4.6;

// modificar las 3 expresiones que siguen a continuación

a *= 5;
b *= 3;
c *= 10;
console.log(a);
console.log(b);
console.log(c);

//Ej 12

var a = 48;
var b = 108;
var c = 33;

// modificar las 3 expresiones que siguen a continuación

a /= 12;
b /= 4;
c /= 11;
console.log(a);
console.log(b);
console.log(c);


//Ej 13

var a = 9;
var b = '9';

var aEsEquivalenteA9 = a == b ;
var bEsEquivalenteA9 = b == a;

console.log("La variable a es equivalente a 9:", aEsEquivalenteA9);
console.log("La variable b es equivalente a '9':", bEsEquivalenteA9);

//Ej 14

var personaA = 'Ada';
var personaB = 'Grace';
var personaC = 'ada';

var nombreAIgualNombreB = personaA == personaB;
var nombreAIgualNombreC = personaA == personaC;
var nombreBDistintoNombreC = personaB != personaC;

console.log("La persona A y la persona B, ¿tienen el mismo nombre?:", nombreAIgualNombreB);
console.log("La persona A y la persona C, ¿tienen el mismo nombre?:", nombreAIgualNombreC);
console.log("La persona B y la persona C, ¿tienen distinto nombre?:", nombreBDistintoNombreC);