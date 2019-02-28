//Metodos en strings

var texto = "Welcome to the jungle!";
var cantidadDeCaracteres = texto.length;

console.log (cantidadDeCaracteres);

//Ejercicio 38
//Crear un documento con el nombre ej38.js
//Declarar una variable nombre con tu nombre como valor
//Mostrar en consola la cantidad de letras que tiene tu nombre

var nombre = "Antonela Rossi";
console.log(nombre.length);

//Ejercicio 39
//Crear un documento con el nombre ej39.js
//Declarar una variable nombre con tu nombre como valor
//Declarar una variable apellido con tu apellido como valor
//Mostrar en consola el siguientes mensajes:
//Mi nombre es nombre y tiene nombre.length letras
//Mi nombre es apellido y tiene apellido.length letras
//Utilizar console.log() para cada mensaje
//Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido

var nombrex = "Antonela";
var apellidox = "Rossi";

console.log ("Mi nombre es", nombrex + " y tiene", nombrex.length + " letras");
console.log ("Mi apellido es", apellidox + " y tiene", apellidox.length + " letras");



var textoParaConcatenar = "Hola";
console.log(textoParaConcatenar.concat(" Guachi", ", aguante todo"));

// Ejercicio 40
// Crear un documento con el nombre ej40.js
// Declarar la variable texto con el siguiente valor: Usando el método
// Declarar la variable metodo con el siguiente valor: concat
// Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat

var concatenacao = "Usando el método";
var elMetodo = " concat";

console.log(concatenacao.concat(elMetodo));

var textoEnMayusculas = 'DALE!';
var textoEnMinusculas = 'guachin';
var textoMixto = "hOlA"

console.log(textoEnMayusculas.toLowerCase());
console.log(textoEnMinusculas.toUpperCase());
console.log(textoMixto.toUpperCase());

//Metodos en number

var stringANumber = "3";
var numero = parseInt (stringANumber);

console.log (numero);

var stringANumber = "9.2";
var numeroch = parseFloat (stringANumber);

console.log (numeroch);

var numeroEnStringss = 9;
var numerochi = numeroEnStringss.toString();

console.log (numerochi);

//Ejercicio 48
//Crear un documento con el nombre ej48.js
//Declarar la variable piString y guardar el valor 3.14 como String
//Declarar la variable constanteString y guardar el valor 42 como String
//Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
//Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
//Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
//Mostrar en consola el contenido de la variable resultado
//Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la variable pi 
//y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.

var piString = "3.14";
var constanteString = "42";
var pi = parseFloat (piString);
var constante = parseInt (constanteString);
var resultado = pi + constante;

console.log (resultado)

piString = pi.toString ();
constanteString = constante.toString ();
resultadoString = resultado.toString ();


var mensajito = resultadoString.concat (" es el resultado de sumar las variables ", piString, " y ", constanteString, " donde ", piString, " es el valor que tiene la variable pi y ", constanteString, " es el valor que tiene la variable constante" );

console.log (mensajito);


// Metodos con parametros
// sintaxis nombreVariable.metodo(parametros);
// nombreVariable.metodo.();


var hola = "Hola";
var espacio = " ";
var coma =  ",";
var y = "y";
var marina = "Marina";
var sofia = "Sofia";
var luciana = "Luciana";

console.log(hola.concat(espacio, marina, coma, espacio, sofia, coma, espacio, y, espacio, luciana));

// si son numeros los suma
// si son stringd los CONCATENAAAAAAAAAAAAAAAAAAAAAAAAA
// si son ambos convierte el numero a string y lo concatena

var nueve = 9;
var nueveEnTexto = "9";
var dos = 2;
var dosEnTexto = "2";

//11 - 92 -911



console.log (nueve + dos);
console.log (nueveEnTexto + dosEnTexto);
console.log (nueveEnTexto + (nueve + dos));