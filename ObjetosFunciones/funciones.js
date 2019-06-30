// // // function saludar() {
// // //     console.log("Hola");
// // // }

// // // saludar();

// // // //

// // // var cantar = function() {
// // //     console.log("Lalaralaralalaaaa");
// // // }

// // // cantar();

// // // //

// // // function obtenerSaludo() {
// // //     return "Hola, Adiós"
// // // }

// // // console.log (obtenerSaludo());

// // // //

// // // function obtenerEdad() {
// // //     return 30;
// // // }

// // // function usuarioLogueado() {
// // //     return true;
// // // }


// // // //Acá una función puede retornar un valor boolean directamente y lo podemos utilizar como condición. 
// // // //Si el usuario está loggeado podemos saludarlo
// // // if (usuarioLogueado()) {
// // //     console.log("Bienvenido Usuarie");
// // // }


// // // //Acá la función retorna un valor numérico por lo cual podemos compararlo 
// // // //y obtener un resultado booleand true/false según el valor retornado por la función
// // // if (obtenerEdad()>=18) {
// // //     console.log("Usuarie mayor a 18")
// // // }


// // // //Las funciones también aceptan uno o varios valores como parametros
// // // //Utilizar parametros hace que nuestras funciones sean más flexibles y tengan más funcionalidades
// // // //Al declarar una función podemos establecer la cantidad de parámetros que acepta esa función y ponerles un nombre a cada uno
// // // //También podemos poner un nombre a cada parámetro para que tenga más contexto dentro de la función


// // // //function lalala (parametro1, parametro2, parametro2) {
// // // //  console.log(parametro1, parametro2, parametro2)
// // // //}

// // // function quieroSaludar (nombreDelUsuario) {
// // //     console.log("Hola " + nombreDelUsuario + "!");
// // // }

// // // quieroSaludar("Laura");
// // // quieroSaludar("Luisa");
// // // quieroSaludar("Martita");


// // // // OTRA FORMA ES UTILIZANDO EL VALOR DE RETORNO RETURN


// // // var salude = function(nombreDelUsuario) {
// // //   return '¡Hola ' + nombreDelUsuario + '!';
// // // }

// // // console.log( salude('Ada')); 
// // // console.log( salude('Grace')); 
// // // console.log( salude('Hedy')); 

// // // //Declaramos la función y la asignamos a la variable saludo
// // // //Ahora podemos pasar un nombre a saludo() y obtener un string como respuesta
// // // //Al valor retornado por la función saludo lo mostramos en consola
// // // //Una función puede aceptar más de un parámetro
// // // //Es importante el orden en que ponemos los parámetros para utilizar una función

// // // var saludemos = function (nombreDelUsuario, edad) {
// // //     console.log("Hola " + nombreDelUsuario + " tu edad es " + edad);
// // // }

// // // saludemos("Juana",33);

// // // //OBJETOS
// // // //Los objetos literales se escriben entre {}
// // // //Un objeto puede tener propiedades
// // // //Las propiedades se definen con un nombre como si fueran variables y se separan con comas
// // // //A las propiedades se les puede asignar un valor utilizando dos puntos

// // // var persona = {
// // //     nombre: "Antonela",
// // //     edad: 33,
// // //     cosasSueltas: "Ama StarWars"
// // // }

// // // console.log(persona);

// // // console.log(persona.cosasSueltas);

// // // persona.edad = 33,5;
// // // persona.nombre = "Rossita";
// // // persona.cosasSueltas = "Ama Arcade Fire"

// // // // se puede asignar una propiedad por fuera del objeto llamandolo 
// // // //objeto.propiedad = valor

// // // persona.comidaFav = "Milanesas"

// // // console.log(persona);


// // // //Métodos
// // // //Los objetos pueden tener métodos
// // // //Un método es una propiedad que tiene una función AYKM?

// // // var persona = {
// // //   nombre: "Antonela",
// // //   saludito: function() {
// // //     console.log("¡Hola Pavote!");
// // //   }
// // // }
// // // // aca hay un objeto que tiene dos propiedades, una tiene asignado un string y la otra es una funcion

// // // persona.saludito();


// // //CLASE MALE

// // //Declaras la FUNCION

// // function saludar () {
// //     console.log("hola")
// // }

// // saludar();
// // saludar();
// // saludar();
// // saludar();

// // //oooooo sino funciones anonimas

// // var saludo = function () {
// //     console.log("hola");
// // }

// // //La llamo asi siempre
// // saludo();

// // //RETORNO

// // var a = 1;
// // function sumar() {
// //    return a = a + 2; //ahora que le agregue return SI me devuelve el valor
// // }

// // //sumar ();
// // //aca ejecuta la funcion pero aun no le dije que me lo muestre

// // //console.log(sumar()); // aca no me muestra nada, simplemente vuelve a ejecutar la funcion
// // //laas funciones no retornan un valor, retorna la funcion ( mas arriba le agregue RETURN)


// // // tambien lo podemos guardar en una variable

// // var a = 1;
// // function sumar() {
// //     return a = a + 5;
// //     console.log(a); 
// // }

// // var resultado =  sumar();
// // console.log(resultado);
// // console.log(a);

// // function usuarioLogueado() {
// //     return true;
// // }
// // if (usuarioLogueado()) {
// //     console.log("hola usuarie")
// // }

// //EL RETURN ES UN DATO si arriba pusiera FALSE nunca entraria a la funcion

// //Ejercicio Funciones 002

// // Declarar una función que muestre los siguientes datos en consola:
// // Tu Nombre
// // Edad
// // Teléfono
// // Calle
// // Altura
// // Código postal

// var losDatos = function () {
//     console.log("Antonela");
//     console.log(33);
//     console.log(1169267357);
//     console.log("Av Diaz Velez");
//     console.log("1200");
// }

// losDatos();

// //Ejercicio Funciones 003 


// //Declarar una variable mostrarNombre y asignar una función
// //La función mostrarNombre tiene que mostrar tu nombre en consola con el siguiente formato:

// //Ejecutar esta función 2 veces
// // var mostrarNombre = function () {
// //     console.log("=======");
// //     console.log("= Ada =");
// //     console.log("=======");
// // }

// // mostrarNombre();
// // mostrarNombre();

// // Ejercicio Funciones 004

// // Declarar una variable numerosPares y asignar una función
// // La función numerosPares muestra en consola los números pares del 0 al 100
// // Ejecutar esta función 5 veces

// // var numerosPares = function() {
// //     for (let index = 0; index <= 99; index++) {
// //         var numere = numere +=2;
// //     }
// // }
// // console.log(numerosPares())
// //NO SE HACER EJERCICIOS DE NUMEROS PARES CHAU


// //EJ6
// //Crear una función que se llame obtenerNombre y retorne tu nombre como string

// // var obtenerNombre = function() {
// //     return "Rossita";
// // }

// // console.log("Mi nombre es " + obtenerNombre());

// // EJ_007.js
// // Crear una función numerosPares
// // Dentro de la función, crear un array con los primeros 5 números pares
// // Retornar ese array
// // // SOLUCION
// // // crear la funcion numerosPares según el enunciado

// // var primerosNumerosPares = numerosPares();

// // console.log(primerosNumerosPares);
// // // deberia mostrar [0, 2, 4, 6, 8]

// //EJ 008
// //Crear una función llamada obtenerSaludo, que retorne un valor string
// //Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable nombre
// //Retornar un texto de la forma: ¡Hola, nombre!, donde nombre tiene que ser el valor guardado en la variable de arriba.
// //Ejecutar la función obtenerSaludo y mostrar el resultado por consola.
// // SOLUCION
// // crear las dos funciones segun el enunciado

// // var obtenerSaludo = function(){
// //     var nombre = obtenerNombre();
// //     return "Hola, " + nombre;
// // }

// // var textoDelSaludo = obtenerSaludo();

// // console.log(textoDelSaludo);
// // mostraria por ejemplo: "¡Hola, Ada!"

// // function mostrarEnConsola(parametro1, parametro2, parametro3) {
// //     console.log(parametro2);  
// //     console.log(parametro1 + parametro2 + parametro3)  
// // }


// // //recien cuando la llamo le pongo vaor al parametro
// // mostrarEnConsola("Sofi", "perro", "Colombia");
// // mostrarEnConsola(1, 2, 3);
// // mostrarEnConsola("Sofi", true, ["hola","locu"],4);

// // mostrarEnConsola()

// //HAY QUE ESTAR SEGURE DE QUE PARAMETROS LE DAMOS A JAVASSSSSSSSSSSSSSSSSCREPTTT
// //PONERLOS EN ORDEN

// // var nombrex = prompt("Nombre");
// // var edad = 33;

// // var teSaludaJS = function (nombreDelUsuarie, edad) {
// //     return "Hola " + nombreDelUsuarie + "!" + " Tenes " + edad + " años?";
// // }

// // console.log(teSaludaJS(nombrex, edad));

// // Ejercicio Funciones 009
// // Crear un documento con el nombre fn_009.js
// // Declarar la función obtenerIDUsuario que retorna un valor number con el número 50
// // Declarar la función usuarioValido que retorna un valor boolean
// // Dentro de esta función obtener el ID del usuario utilizando la función obtenerIDUsuario
// // Si el ID del usuario es mayor que 30 retornar falso sino verdadero
// // Ejecutar la función usuarioValido y guardar el valor que retorna en una variable llamada elUsuarioEsValido
// // SI el elUsuarioEsValido Entonces
// // Mostrar el mensaje: El usuario es válido
// // SINO
// // Mostrar el mensaje: El usuario no es válido


// function obtenerIDUsuario() {
//     return 50    
// }

// function usuarioValido() {
//     if (obtenerIDUsuario > 30) {
//         return false
//     } else {
//         return true
//     }
// }

// var elUsuarioEsValido = usuarioValido

// if (elUsuarioEsValido === true) {
//     console.log("El usuario es valido")
// } else {
//     console.log("El usuario no es valido")
// }


// //Ej 010

// // Crear una función llamada mostrarNombreCompleto
// // Esta función recibe 2 parámetros nombre y apellido
// // Mostrar con console.log() el nombre completo de la persona, concatenando nombre y apellido
// // Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'
// // Crear una función llamada obtenerNombreCompleto
// // Esta función recibe 2 parámetros nombre y apellido
// // Retornar el nombre completo de la persona, concatenando nombre y apellido
// // Por ejemplo: si los parámetros son 'Grace' y 'Hopper', debe retornar el string resultante 'Grace Hopper'
// // var firstName = 'Ada';
// // var lastName = 'Lovelace';

// // // esta funcion muestra el nombre concatenado, ya que tiene un console.log adentro
// // mostrarNombreCompleto(firstName, lastName); // Ada Lovelace

// // // en el caso de esta funcion, como solo retorna el string concatenado, necesito poner el console.log
// // console.log( obtenerNombreCompleto(firstName, lastName) ); // Ada Lovelace


// // //Este se ve en consola
// // var mostrarNombreCompleto = function (nombre, apellido) {
// //     console.log( nombre + " " + apellido);
// // }

// // mostrarNombreCompleto("Ada","Lovelace");

// // //Este NO se ve en consola pero si lo ejecuta
// // var obtenerNombreCompleto = function (nombres, apellidos) {
// //     return nombres + " " + apellidos;
// // }

// // obtenerNombreCompleto("GRace","Hopper");

// //declarar dos variables de prompt

// // var nombre = prompt("Cual es tu nombre?", " " )
// // var edad = prompt("Cual es tu edad?", " ")

// // var resultado = function (nombre, edad) {
// //     return "Tu nombre es " + nombre + " y tu edad es " + edad;
// // }

// // document.write (resultado(nombre, edad))
// // //hacer una funcion que retorne el siguiente mensaje:
// // //“Tu nombre es *nombre* y tu edad es *edad*”
// // //luego llamar a la funcion para mostrar el resultado en el cuerpo del documento

// //EJ fn_012

// // Copiar el código que se encuentra a continuación, y completar las funciones
// // Todo el código de cada función debería ir dentro de las llaves de esa función

// function sonIguales(a, b) {
//     if (a === b) {
//         return true
//         console.log(true);
//     } else {
//         return false
//         console.log(false);
//     }
//     // retorna true si a y b son iguales
//     // sino retorna false
// }

// console.log(sonIguales('Ada', 'Ufa') === false);
// console.log(sonIguales('Ada', 'Ada') === true);

// function tienenLaMismaLongitud(str1, str2) {
//     if (str1.length === str2.length) {
//         return true
//         console.log(true);
//     } else {
//         return false
//         console.log(false);
//     }
// }

// console.log(tienenLaMismaLongitud('ada', 'Ada') === true);
// console.log(tienenLaMismaLongitud('ada', 'Grace') === false);



// function esMenorQueNoventa(num) {
//     if (num < 90) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(esMenorQueNoventa(45) === true);
// console.log(esMenorQueNoventa(115) === false);
// console.log(esMenorQueNoventa(90) === false);


// function esMayorQueCincuenta(num) {
//     if (num > 50) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(esMayorQueCincuenta(90) === true);
// console.log(esMayorQueCincuenta(45) === false);
// console.log(esMayorQueCincuenta(50) === false);

// function obtenerResto(a, b) {
//     return a%b;
// }

// function esPar(num) {
//     if(num%2 ===0){
//         return true;
//     } else {
//         return false;
//     }
   
// }

// console.log(esPar(5) === false);
// console.log(esPar(116) === true);
// console.log(esPar(0) === true);
// console.log(esPar(-4) === true);

// function esImpar(num) {
//     if(num%2 !==0){
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(esImpar(50) === false);
// console.log(esImpar(3) === true);
// console.log(esImpar(-5) === true);
// console.log(esImpar(4) === false);
// // deberias ver en la consola todo en true


// //EJERCICIOS fn_013.js
// // Copiar el código que se encuentra a continuación, y completar las funciones
// // Todo el código de cada función debería ir dentro de las llaves de esa función
// function exclamar(str) {
//     return "¡" + str + "!"
// }

// console.log( exclamar('hola') === '¡hola!' );
// console.log( exclamar('hola, mundo') === '¡hola, mundo!' );

// function unirNombre(nombre, apellido) {
//     return nombre + " " + apellido;
// }

// console.log( unirNombre('Ada', 'Lovelace') === 'Ada Lovelace' );
// console.log( unirNombre('Grace', 'Hopper') === 'Grace Hopper' );

// function saludar(nombre) {
//   return "¡Hola " + nombre + "!"
//   // si querés, podés reutilizar la función exclamar() que creamos más arriba
// }

// console.log( saludar('Ada') === '¡Hola Ada!' );
// console.log( saludar('Grace') === '¡Hola Grace!' );

// // deberias ver en la consola todo en true

// //Ejercicio Funciones 014

// //Crear una función llamada obtenerPrimerElemento
// //La función recibe un único parámetro, del tipo array
// //Retornar el elemento que se encuentra en la primer posición

// var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

// var numerosPares = [0, 2, 4, 6, 8, 10, 12];

// function obtenerPrimerElemento (peliculasBatman) {
//     return peliculasBatman[0]
// }

// console.log( obtenerPrimerElemento(peliculasBatman) ); // "Batman Begins"
// console.log( obtenerPrimerElemento(numerosPares) ); // 0

// //Ejercicio fn_015.js
// //Crear una función llamada obtenerUltimoElemento
// //La función recibe un único parámetro, del tipo array
// //Retornar el elemento que se encuentra en la última posición

// function obtenerUltimoElemento(peliculasBatman) {
//     return peliculasBatman[peliculasBatman.length-1];
    
// }

// console.log( obtenerUltimoElemento(peliculasBatman) ); // "The Dark Knight Rises"
// console.log( obtenerUltimoElemento(numerosPares) ); // 12

// // Ejercicio Funciones 016

// // Crear una función llamada calcularSumatoria
// // La función recibe un único parámetro, del tipo array, con números enteros
// // Retornar la suma de todos los números que pertenecen al array
// // codear a aca abajo la solución al ejercicio

// // CREAR calcularSumatoria



// function calcularSumatoria(suma) {
//     return suma.reduce((a,b) => a+b ,0);
// }

// var numeros = [7, 4, 1, 8, 9, 4, 9];

// console.log( calcularSumatoria(numeros)); // 42

// //EJERCIOS fn_017.js
// // Crear otra función llamada calcularPromedio
// // La función recibe un único parámetro, del tipo array, con números enteros
// // Retornar el promedio entre todos los números que pertenecen al array
// // codear a aca abajo la solución al ejercicio
// // CREAR calcularPromedio
// // para la funcion calcularPromedio podés utilizar calcularSumatoria que hicimos en el ejercicio fn_016

// function calcularPromedio (prom) {
//     return calcularSumatoria(numeros)/numeros.length
// }

// console.log( calcularPromedio(numeros) ); // 6

// Ejercicio Funciones 018

// Tenemos un array en una variable masNumeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Recorré el array masNumeros y:
// Si el número es par, agregalo al array numerosPares
// Si el número es impar, agregalo al array numerosImpares
// Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
// Para saber si un número es par o impar, tenemos que utilizar las funciones que creamos en el ejercicio fn_012

var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

function fuck (num) {
    for (let index = 0; index < masNumeros.length; index++) {
        if(num[index]%2 === 0){
            numerosPares.push(masNumeros[index]);
        } else if (num[index]%2 !== 0 ){
            numerosImpares.push(masNumeros[index]);
        }
    }
}
console.log(fuck(masNumeros));


// codeá acá la solución al ejercicio

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio Funciones 019

// Crear una función con el nombre compararNumeros que acepte dos parámetros numéricos llamados numero1 y numero2

// La función tiene que retornar:

// SI numero1 es menor que numero2, retornar -1
// SI numero2 es menor que numero1, retornar 1
// SI numero1 es igual que numero2, retornar 0
// Probar la función en el siguiente código

// codear acá la función

function compararNumeros(numeroU, numeroD) {
    if (numeroU < numeroD){
        return -1;
    } else if (numeroD < numeroU){
        return 1;
    } else if (numeroU == numeroD){
        return 0;
    }
    
}

console.log( compararNumeros(1, 5) < 0 ); // true
console.log( compararNumeros(5, 1) > 0 ); // true
console.log( compararNumeros(1, 1) === 0 ); // true


//Ejercicio Funciones 020

// Crear una función con el nombre mostrarElNumeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2

// La función tiene que retornar el mensaje:

// SI numero1 es mayor que numero2, retornar El número ${numero1} es más grande que ${numero2}
// SI numero2 es menor que numero1, retornar El número ${numero2} es más grande que ${numero1}
// SI numero1 es igual que numero2, retornar Los dos números son iguales
// Para comparar los dos números, hay que usar la función compararNumeros desarrollada en el ejercicio fn_019

// Probar la función en el siguiente código

// codear acá la función

function mostrarElNumeroMasGrande(numero1,numero2) {
    if(numero1>numero2){
        return "El numero " + numero1 + " es mas grande que " + numero2
    } else if (numero2>numero1) {
        return "El numero " + numero2 + " es mas grande que " + numero1
    } else if (numero1 == numero2) {
        return "Los dos numeros son iguales"
    }
    
}

console.log( mostrarElNumeroMasGrande(1, 5) ); // El número 5 es más grande que 1
console.log( mostrarElNumeroMasGrande(63, 27) ); // El número 63 es más grande que 27
console.log( mostrarElNumeroMasGrande(1, 1) ); // Los dos números son iguales