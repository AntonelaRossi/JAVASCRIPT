// // function saludar() {
// //     console.log("Hola");
// // }

// // saludar();

// // //

// // var cantar = function() {
// //     console.log("Lalaralaralalaaaa");
// // }

// // cantar();

// // //

// // function obtenerSaludo() {
// //     return "Hola, Adiós"
// // }

// // console.log (obtenerSaludo());

// // //

// // function obtenerEdad() {
// //     return 30;
// // }

// // function usuarioLogueado() {
// //     return true;
// // }


// // //Acá una función puede retornar un valor boolean directamente y lo podemos utilizar como condición. 
// // //Si el usuario está loggeado podemos saludarlo
// // if (usuarioLogueado()) {
// //     console.log("Bienvenido Usuarie");
// // }


// // //Acá la función retorna un valor numérico por lo cual podemos compararlo 
// // //y obtener un resultado booleand true/false según el valor retornado por la función
// // if (obtenerEdad()>=18) {
// //     console.log("Usuarie mayor a 18")
// // }


// // //Las funciones también aceptan uno o varios valores como parametros
// // //Utilizar parametros hace que nuestras funciones sean más flexibles y tengan más funcionalidades
// // //Al declarar una función podemos establecer la cantidad de parámetros que acepta esa función y ponerles un nombre a cada uno
// // //También podemos poner un nombre a cada parámetro para que tenga más contexto dentro de la función


// // //function lalala (parametro1, parametro2, parametro2) {
// // //  console.log(parametro1, parametro2, parametro2)
// // //}

// // function quieroSaludar (nombreDelUsuario) {
// //     console.log("Hola " + nombreDelUsuario + "!");
// // }

// // quieroSaludar("Laura");
// // quieroSaludar("Luisa");
// // quieroSaludar("Martita");


// // // OTRA FORMA ES UTILIZANDO EL VALOR DE RETORNO RETURN


// // var salude = function(nombreDelUsuario) {
// //   return '¡Hola ' + nombreDelUsuario + '!';
// // }

// // console.log( salude('Ada')); 
// // console.log( salude('Grace')); 
// // console.log( salude('Hedy')); 

// // //Declaramos la función y la asignamos a la variable saludo
// // //Ahora podemos pasar un nombre a saludo() y obtener un string como respuesta
// // //Al valor retornado por la función saludo lo mostramos en consola
// // //Una función puede aceptar más de un parámetro
// // //Es importante el orden en que ponemos los parámetros para utilizar una función

// // var saludemos = function (nombreDelUsuario, edad) {
// //     console.log("Hola " + nombreDelUsuario + " tu edad es " + edad);
// // }

// // saludemos("Juana",33);

// // //OBJETOS
// // //Los objetos literales se escriben entre {}
// // //Un objeto puede tener propiedades
// // //Las propiedades se definen con un nombre como si fueran variables y se separan con comas
// // //A las propiedades se les puede asignar un valor utilizando dos puntos

// // var persona = {
// //     nombre: "Antonela",
// //     edad: 33,
// //     cosasSueltas: "Ama StarWars"
// // }

// // console.log(persona);

// // console.log(persona.cosasSueltas);

// // persona.edad = 33,5;
// // persona.nombre = "Rossita";
// // persona.cosasSueltas = "Ama Arcade Fire"

// // // se puede asignar una propiedad por fuera del objeto llamandolo 
// // //objeto.propiedad = valor

// // persona.comidaFav = "Milanesas"

// // console.log(persona);


// // //Métodos
// // //Los objetos pueden tener métodos
// // //Un método es una propiedad que tiene una función AYKM?

// // var persona = {
// //   nombre: "Antonela",
// //   saludito: function() {
// //     console.log("¡Hola Pavote!");
// //   }
// // }
// // // aca hay un objeto que tiene dos propiedades, una tiene asignado un string y la otra es una funcion

// // persona.saludito();


// //CLASE MALE

// //Declaras la FUNCION

// function saludar () {
//     console.log("hola")
// }

// saludar();
// saludar();
// saludar();
// saludar();

// //oooooo sino funciones anonimas

// var saludo = function () {
//     console.log("hola");
// }

// //La llamo asi siempre
// saludo();

// //RETORNO

// var a = 1;
// function sumar() {
//    return a = a + 2; //ahora que le agregue return SI me devuelve el valor
// }

// //sumar ();
// //aca ejecuta la funcion pero aun no le dije que me lo muestre

// //console.log(sumar()); // aca no me muestra nada, simplemente vuelve a ejecutar la funcion
// //laas funciones no retornan un valor, retorna la funcion ( mas arriba le agregue RETURN)


// // tambien lo podemos guardar en una variable

// var a = 1;
// function sumar() {
//     return a = a + 5;
//     console.log(a); 
// }

// var resultado =  sumar();
// console.log(resultado);
// console.log(a);

// function usuarioLogueado() {
//     return true;
// }
// if (usuarioLogueado()) {
//     console.log("hola usuarie")
// }

//EL RETURN ES UN DATO si arriba pusiera FALSE nunca entraria a la funcion

//Ejercicio Funciones 002

// Declarar una función que muestre los siguientes datos en consola:
// Tu Nombre
// Edad
// Teléfono
// Calle
// Altura
// Código postal

var losDatos = function(){
    console.log("Antonela");
    console.log(33);
    console.log(1169267357);
    console.log("Av Diaz Velez");
    console.log("1200");
}

losDatos();

//Ejercicio Funciones 003 


//Declarar una variable mostrarNombre y asignar una función
//La función mostrarNombre tiene que mostrar tu nombre en consola con el siguiente formato:

//Ejecutar esta función 2 veces
// var mostrarNombre = function () {
//     console.log("=======");
//     console.log("= Ada =");
//     console.log("=======");
// }

// mostrarNombre();
// mostrarNombre();

// Ejercicio Funciones 004

// Declarar una variable numerosPares y asignar una función
// La función numerosPares muestra en consola los números pares del 0 al 100
// Ejecutar esta función 5 veces

// var numerosPares = function() {
//     for (let index = 0; index <= 99; index++) {
//         var numere = numere +=2;
//     }
// }
// console.log(numerosPares())
//NO SE HACER EJERCICIOS DE NUMEROS PARES CHAU


//EJ6
//Crear una función que se llame obtenerNombre y retorne tu nombre como string

// var obtenerNombre = function() {
//     return "Rossita";
// }

// console.log("Mi nombre es " + obtenerNombre());

// EJ_007.js
// Crear una función numerosPares
// Dentro de la función, crear un array con los primeros 5 números pares
// Retornar ese array
// // SOLUCION
// // crear la funcion numerosPares según el enunciado

// var primerosNumerosPares = numerosPares();

// console.log(primerosNumerosPares);
// // deberia mostrar [0, 2, 4, 6, 8]

//EJ 008
//Crear una función llamada obtenerSaludo, que retorne un valor string
//Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable nombre
//Retornar un texto de la forma: ¡Hola, nombre!, donde nombre tiene que ser el valor guardado en la variable de arriba.
//Ejecutar la función obtenerSaludo y mostrar el resultado por consola.
// SOLUCION
// crear las dos funciones segun el enunciado

// var obtenerSaludo = function(){
//     var nombre = obtenerNombre();
//     return "Hola, " + nombre;
// }

// var textoDelSaludo = obtenerSaludo();

// console.log(textoDelSaludo);
// mostraria por ejemplo: "¡Hola, Ada!"

// function mostrarEnConsola(parametro1, parametro2, parametro3) {
//     console.log(parametro2);  
//     console.log(parametro1 + parametro2 + parametro3)  
// }


// //recien cuando la llamo le pongo vaor al parametro
// mostrarEnConsola("Sofi", "perro", "Colombia");
// mostrarEnConsola(1, 2, 3);
// mostrarEnConsola("Sofi", true, ["hola","locu"],4);

// mostrarEnConsola()

//HAY QUE ESTAR SEGURE DE QUE PARAMETROS LE DAMOS A JAVASSSSSSSSSSSSSSSSSCREPTTT
//PONERLOS EN ORDEN

// var nombrex = prompt("Nombre");
// var edad = 33;

// var teSaludaJS = function (nombreDelUsuarie, edad) {
//     return "Hola " + nombreDelUsuarie + "!" + " Tenes " + edad + " años?";
// }

// console.log(teSaludaJS(nombrex, edad));


//Ej 010

// Crear una función llamada mostrarNombreCompleto
// Esta función recibe 2 parámetros nombre y apellido
// Mostrar con console.log() el nombre completo de la persona, concatenando nombre y apellido
// Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'
// Crear una función llamada obtenerNombreCompleto
// Esta función recibe 2 parámetros nombre y apellido
// Retornar el nombre completo de la persona, concatenando nombre y apellido
// Por ejemplo: si los parámetros son 'Grace' y 'Hopper', debe retornar el string resultante 'Grace Hopper'
// var firstName = 'Ada';
// var lastName = 'Lovelace';

// // esta funcion muestra el nombre concatenado, ya que tiene un console.log adentro
// mostrarNombreCompleto(firstName, lastName); // Ada Lovelace

// // en el caso de esta funcion, como solo retorna el string concatenado, necesito poner el console.log
// console.log( obtenerNombreCompleto(firstName, lastName) ); // Ada Lovelace


// //Este se ve en consola
// var mostrarNombreCompleto = function (nombre, apellido) {
//     console.log( nombre + " " + apellido);
// }

// mostrarNombreCompleto("Ada","Lovelace");

// //Este NO se ve en consola pero si lo ejecuta
// var obtenerNombreCompleto = function (nombres, apellidos) {
//     return nombres + " " + apellidos;
// }

// obtenerNombreCompleto("GRace","Hopper");

//declarar dos variables de prompt

// var nombre = prompt("Cual es tu nombre?", " " )
// var edad = prompt("Cual es tu edad?", " ")

// var resultado = function (nombre, edad) {
//     return "Tu nombre es " + nombre + " y tu edad es " + edad;
// }

// document.write (resultado(nombre, edad))
// //hacer una funcion que retorne el siguiente mensaje:
// //“Tu nombre es *nombre* y tu edad es *edad*”
// //luego llamar a la funcion para mostrar el resultado en el cuerpo del documento


