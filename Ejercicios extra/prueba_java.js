//ELEFANTES // 
/*
var number;
if (number = 1) {
    document.write('Un elefante se balanceaba <br>' +
        'sobre la tela de una araña <br>' +
        'como veía que resistía <br>' + 
        'fue a buscar a otro elefante <br> <br>');

    number = number + 1;
}

while (number < 1000) {
    document.write(number + ' elefantes se balanceaban <br>' + 'sobre la tela de una araña <br>' + 'como veían que resistía <br>'
        + 'fueron a buscar a otro elefante <br> <br>');

    number = number + 1;
}

var number = 2
// inicia en dos //

while (number < 20) {
    document.write(number + ' elefantes se balanceaban <br>' +
        "sobre la tela de una araña <br>" +
        "como veían que resistía <br>" +
        "fueron a buscar a otro elefante <br> <br>")

    number = number + 1
    //para que a cada vuelta le agregue uno //

}
*/

//declaras las variables y asignas un valor
//las variables son alfanumericas, empiezan si o si con una letra o con guion bajo y sino camelCase
// operacion de asignacion dde valor a la variable =




var nombre = "Antonela";
var apellido;

apellido = "Rossi";


//las variables solo guardan un valor, si le pones otro valor se sobeescribe


//tipo de datos primitivos

// strings , texto, van con comillas, 

//concatenar strings +

nombre + apellido; 

// numeros
var numero = 9;
console.log(typeof numero);

var numeroNegativo = -9;
var numeroConDecimales = 20.5;

// booleanos
// solo arroja true o false
var buleano = true;
var otroBuleano = false;

//sirve para cosas que tienen dos valores, tipo prendido o apagado


//null
//tipo de dato NULO, la variable no tiene valor especifico, esta vacia
var variableVacia = null;

//undefined
//es lo mismo que null pero es que la variable "no esta definida" no es lo mismo que esta vacia
var variableNoDefinida;


// var edad;
// edad = prompt("Ingrese su edad:","");
// document.write("Tienes ");
// document.write(edad);
// document.write(" años");

// var nombre = "Martina";
// document.write(nombre);
// var numero = 33;
// document.write(numero);

// document.write('Hola');
// document.write('<br>');
// document.write('<br>');
// document.write('Chau');

// var nombre;
// nombre = prompt ("Ingresa tu nombre");
// document.write("Buenas noches " + nombre);


// //Condicionales Simples//
// var nombre;
// var nota;
// nombre=prompt("Ingrese nombre:");
// nota=parseInt(prompt("Ingrese su nota:"));
//  if (nota>=4) {
//  document.write(nombre + " esta aprobado con un " + nota);
//  }


// //Condicionales compuestos//
// var num1 = prompt ("ingrese primer numero");
// var num2 = prompt ("ingrese segundo numero");

// if (num1>num2) {
//     document.write("el mayor es "+num1 );
//     } else {
//     document.write("el mayor es "+num2 );
//     }

// console.log


// //Condicionales anidados//

// var nota1 = prompt ("nota1");
// var nota2 = prompt ("nota2");
// var nota3 = prompt ("nota3");

// var promedio;
//  promedio = (nota1+ nota2+ nota3)/3;
//  if (promedio>=7){
//  document.write("promocionado");
//  } else {
//  if (promedio>=4){
//  document.write("regular");
//  } else {
//  document.write("reprobado");
//  }
//  }


//  //While//
//  var x;
//  x=1;
//  while (x<=100)
//  {
//  document.write(x);
//  document.write('<br>');
//  x=x+1;
//  }



// var userId = 10;

// while (userId < 10) {
//  console.log (userId);
//  userId++;
//  userId--;
//  userId += 1;
// }


// //do while // hacelo hasta que de false

// var texto = "";
// var i = 0;  

// do {
//     texto = "El número de vuelta: " + i;
//     console.log (texto);
//     i = i + 2;
// } while (i < 5);


// // for // sirve para hacerl determiinada cantidad de veces
// var i;
//     for (i=0; i<5 ; i++ ) {
//         console.log ("Hola" + i)
// }


// //Array es una lista ordenada array= conjunto de datos y va entre []//

// var listaNombre = ["Marcela","Celeste","..."]; 

// console.log(listaNombre)

 

//  var listaDelSuper = ["queso","jamon","pan","birra"]

//  listaDelSuper.length; 
//  for (var i =0; i<listaDelSuper.length - 1; i++) console.log(listaDelSuper [i]);
//  {}


//  //otro ejercicio de for//

// var listaNombres = [" Martina", " Flor"];


// for (var i = 0 ; i<listaNombres.length; i++) {
//     console.log(i+1 + listaNombres [i]);
//     }

   


//     //ejercicios

// var meses = ["enero", "febrero", "marzo", "abril", "mayo","junio","julio","agosto"];

// var micumplemes = meses [7];

// console.log(micumplemes);


// var nombres = ["Marta ", "Michael "];
// var apellidos = ["Rodriguez", "López"];

// var nombreCompleto = [nombres [1] + apellidos [0]];

// console.log(nombreCompleto);



// var cositas = ["lapiz","mesa","silla","computadora","cafe"];

// var largo = cositas.length - 1;

// console.log (largo)

// for (var i = largo ; i >= 0 ; i--) {
//     console.log(i + ": " + cositas [i]); 
// }




// var lasPibas = [];

// for (i=0; i<=4 ; i++ ) {
//     var nombre = prompt("Ingresa tu nombre");
//     lasPibas.push(nombre);
//     }
 
// console.log(lasPibas);

// Crear un array de strings.
// // Eliminar un elemento e
// // imprimir la lista actualizada,
// // hasta que quede vacio el array.




// var lasPibas = ["toti","sofi", "yam", "gachi","pachi"];
// console.log(lasPibas);

// lasPibas.pop ();

// console.log (lasPibas);

// delete lasPibas [3];
// console.log (lasPibas);

// lasPibas [3] = "reemplazo";

// console.log (lasPibas);



// //segunda parte

// var lasPibas = ["toti","sofi", "yam", "gachi","pachi"];
// var largo = lasPibas.length;

// for(var i=0; i<= largo -1; i++) {
//     lasPibas.pop ();
//     console.log (lasPibas);
// }


// Ejercicio cuatro:
// // Crear dos arrays varios.
// // listadoDeNotas y listadoDeNotasAprobadas
// // Ingresar todas las notas.
// // Evaluar cada nota,
// // si son mayores 8... impriman algo: 'Excelente nota'.
// // si esta entre 5 y 7... impriman algo: 'Buena nota'.
// // De lo contrario... impriman algo: 'Necesito practicar más'.
// // imprimir cantidad de notas 'Excelente nota', 'Buenas notas' y 'Necesito practicar más.


// var listadoDeNotasDesaprobadas = [];
// var listadoDeNotasAprobadas = [];


// for (var i = 0; i <= 10; i++) {
//     var notaIngresada = prompt("ingresa tu nota");
//     if (notaIngresada > 4) {
//         listadoDeNotasAprobadas.push(notaIngresada);
//         console.log(notaIngresada);
//         if (notaIngresada < 8) {
//             console.log("buena nota");
//         } else {
//             console.log(notaIngresada);
//             console.log("excelente nota");
//         }
//     }
//     else {
//         listadoDeNotasDesaprobadas.push(notaIngresada);
//         console.log(notaIngresada);
//         console.log("segui estudiando");
//     }

// }
// console.log(listadoDeNotasAprobadas);
// console.log(listadoDeNotasDesaprobadas)

// // Ejercicio 5: Juego de piedra, papel y tijera.
// // Crear dos variables para guardar
// // las opciones elegidas por cada jugador.
// // Dos usuarios deben ingresar su opcion elegida.
// // ('Deben validar que el usuario ingrese
// // piedra papel o tijera')
// // Crear dos variables para guardar los
// //  intentos ganados por cada jugador
// // Cuando algun usuario, llegue a dos intentos ganados.
// // Imprimir que jugador gano.



var opcionJugador1 = prompt("Jugador 1: piedra, papel o tijera?", "");
var opcionJugador2 = prompt("Jugador 2: piedra, papel o tijera?", "");
//Contador//
var intentosGanados1 = [];
var intentosGanados2 = [];



while (intentosGanados1 < 2 && intentosGanados2 < 2) {
    
    // una forma de valida inputs //
    if ((opcionJugador1 === "piedra"
        || opcionJugador1 === "papel"
        || opcionJugador1 === "tijera")
        && //& = Y// || los palitos son O
        (opcionJugador2 === "piedra"
            || opcionJugador2 === "papel"
            || opcionJugador2 === "tijera")
    ) {
        console.log("Empieza el juego");

        if (opcionJugador1 === "piedra" && opcionJugador2 === "piedra") {
            console.log("Hay Empate");
        } else if (opcionJugador1 === "piedra" && opcionJugador2 === "papel") {
            intentosGanados2.push("Punto");
            console.log("Gano Jugador Dos");
        } else if (opcionJugador1 === "piedra" && opcionJugador2 === "tijera") {
            intentosGanados1.push("Punto");
            console.log("Gano Jugador Uno");
        } else if (opcionJugador1 === "papel" && opcionJugador2 === "piedra") {
            intentosGanados1.push("Punto");
            console.log("Gano Jugador Uno");
        } else if (opcionJugador1 === "papel" && opcionJugador2 === "papel") {
            console.log("Hay Empate");
        } else if (opcionJugador1 === "papel" && opcionJugador2 === "tijera") {
            intentosGanados2.push("Punto");
            console.log("Gano Jugador Dos");
        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "piedra") {
            intentosGanados2.push("Punto");
            console.log("Gano Jugador Dos");
        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "papel") {
            intentosGanados1.push("Punto");
            console.log("Gano Jugador Uno");
        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "tijera") {
            console.log("Hay Empate");
        }


        // cierro el if adentro del if anterior //
    } else {
        console.log("Rescatate guacho, escribiste mal " +
            " Jugador 1: " + opcionJugador1 + "" +
            " Jugador 2: " + opcionJugador2);
    }
}

/*
//iteracion de jugadas//
while (intentosGanados1 < 2 && intentosGanados2 < 2) {
    console.log("Gano jugador 1");
}
*/
































