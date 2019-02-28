//Clase Male

var numero = 1;
var nombre = "Antonela";

var arraysDeNombres = ["Maqui", "Male", "Vicky", "Lou"]

console.log(arraysDeNombres.length);

console.log(arraysDeNombres);
console.log("posicion 1 del Array", arraysDeNombres [1]);



var datos = ['Hola', 50, true, null, function() { console.log('hola') } ];

var saludo = datos[0];
var edad = datos[1];
var tieneGatos = datos[2];
var miVariable = datos[3];
var saludar = datos[4];



  
console.log(saludo);
console.log(edad);
console.log('tiene gatos?:', tieneGatos);
console.log(miVariable);


saludar();
//OMG!!!!


var alumnos = ['Carlos', 'Martita', 'Griselda', , , , , , 'Mabeeell'];

alumnos [5] = 'Cosas';
alumnos [3] = 'Aguante';
alumnos [4] = 'Meter';
alumnos [6] = 'Por';
alumnos [7] = 'Aca';

console.log (alumnos);

console.log (alumnos.length);

var cantidadDeElementos = alumnos.length;
var ultimoIndice = cantidadDeElementos - 1;
var indiceCuatro = cantidadDeElementos - 5;


console.log(alumnos[ultimoIndice]); 
console.log(alumnos[indiceCuatro]);



//Push
//El método push permite agregar uno o más elementos al final de un array
//Retorna la nueva longitud que tiene el array

//Ejemplo:

var animales = ['cocodrilo', 'marsupial', 'delfin'];
console.log(animales);

animales.push('conejitos');

console.log(animales);

animales.push('gatitos','elefantes');

console.log(animales);

//Unshift
//El método unshift agrega uno o más elementos al inicio de un array
animales.unshift('el burro delante');
console.log(animales);

//Retorna la nueva longitud que tiene el array
console.log(animales.unshift("dos burros por delante"));
// devuelve un numero


//Shift
//El método shift elimina el primer elemento de un array
//Retorna el elemento eliminado
//Este método modifica la propiedad length del array

var animals = ['cat', 'dog', 'cow', 'beaver'];
animals.shift(); // saca el primer elemento!
console.log(animals);

//Pop
//El método pop elimina el último elemento de un array
//Retorna el elemento eliminado
//Este método modifica la propiedad length del array

animals.pop(); // saca el ultimo
console.log(animals);

//Sort
//Utilizando el método sort podemos ordenar un array
//Retorna el array ordenado
//Los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings


var numers = [1, 13, 1000, 4, 2, 5, 3, 8, 9];
numers = numers.sort();

console.log(numers);

//Reverse
//El método reverse nos permite revertir el orden que tiene un array
//Retorna el array modificado

numers.reverse();
console.log(numers);

//Join (y concat sirven para lo mismo de distintas formas)
//El método join permite unir los valores de un array en un string
//Acepta como valor un string para unir los elementos

var numeris = [1, 4, 2, 5, 3, 8, 9];

numeris = numeris.join(' y tambien ');
console.log(numeris);

//Concat
//El método concat nos permite unir 2 arrays y obtener un nuevo array con los elementos de ambos


var animalitos = ['cow', 'cat', 'dog'];
var mutantes = ['Mistique', 'Storm', 'Rogue', 'Jean Grey'];
var animalitosMutantes = animalitos.concat(mutantes);

console.log(animalitosMutantes);

//IndexOf
//El método indexOf retorna el primer índice donde se encuentra un elemento
//Si no encuentra el elemento buscado retorna -1

// //var mutantes = ['Mistique', 'Storm', 'Rogue', 'Jean Grey'];

// if (mutantes.indexOf('Mistique') > -1) { //porque > -1 ?¿?¿¿?¿?¿
//   console.log('Mistique es parte de los mutantes');
// }


// if (mutantes.indexOf('Logan') > -1) {
//   console.log('Logan es parte de los mutantes');
// } else {
//   console.log('Logan no es parte de los mutantes');
// }

// //En la primer condición se cumple ya que indexOf retorna la posición 2 donde se encuentra el elemento Bestia
// //En la segunda condición no se cumple ya que indexOf retorna -1 ya que Logan no es parte del array mutantes en este momento 
// //(sólo para este ejemplo, te queremos Logan! ❤️)


// //toString en ARRAYS
// //El método toString nos retorna la representación del contenido de un array en UN SOLO string
// //Es similar a join pero no sabemos como une los elementos ya que no lo especificamos


// //var mutantes = ['Mistique', 'Storm', 'Rogue', 'Jean Grey'];
// console.log(mutantes.toString());


// //ForEach
// //Podemos iterar o recorrer un array utilizando el método forEach()
// //Este método acepta una función como parámetro
// //La función que le pasamos a este método recibe como parámetro cada uno de los elementos del array

// //SEPARA DEL ARRAY CADA STRING "EACHHHHH"

// var companierxs = ['marce', 'agus',  'julia', 'fede', 'carito', 'lauri', 'euge'];

// companierxs.forEach(function(companierx) {
//   console.log(companierx);
// });

// //SORT

// var stringsDesordenado = ["zeta","xilofon","agua","aaaaab"]

// stringsDesordenado.sort();
// console.log(stringsDesordenado);

// //SORT NO ES BUENO PARA NUMEROS!!! por el UNICODE 
// var numerosDesordenados = [2,6,7,9,3,5];
// console.log(numerosDesordenados);
// numerosDesordenados.sort();

// console.log(numerosDesordenados.sort());
// console.log(numerosDesordenados);
// console.log(numerosDesordenados[1]);


// Crear un documento con el nombre arr_014.js
// Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
// Eliminar el primer elemento, y agregarlo al final del array.
// Mostrar el resultado final.
// Resultado esperado
// [1, 2, 3, 4, 5, 6]

var numeritos = [6,1,2,3,4,5];

numeritos.shift();
console.log(numeritos);
numeritos.push(6);
console.log(numeritos);

//Crear un archivo con el nombre arr_000.js
//Declarar una variable llamada womenInTech y asignarle un array que contenga 5 nombres de mujeres influyentes en la tecnología.
//Declarar una variable llamada arrayDeNumeros y asignarle un array que contenga 5 números (cualquier número).
//Mostrar en consola el contenido de ambas variables.

var womenInTech = ["Ada Lovelace", "Hedwig Eva Maria Kiesler", "Radia Joy Perlman","Susan Wojcicki", "Jude Milhon"];

var arrayDeNumeros = [1,2,3,4,5];

console.log(womenInTech);
console.log(womenInTech.length);
console.log(womenInTech[0]);
console.log(arrayDeNumeros);

//EJ 2
//Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.

var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log(playlistFoo[1])
console.log(playlistFoo[4])

// Ejercicio Array 012

// Declarar una variable llamada concreteAndGold y asignarle un array vacio []
var concreteAndGold = [];

concreteAndGold.push("T-Shirt");
concreteAndGold.push("Run");
concreteAndGold.push("Make It Right","The Sky Is a Neighborhood","La Dee Da","Dirty Water","Arrows","Happy Ever After (Zero Hour)","Sunday Rain","The Line","Concrete and Gold")
console.log(concreteAndGold[0]);
console.log(concreteAndGold[concreteAndGold.length-1]);
console.log(concreteAndGold);

//No se puede utilizar índices numéricos
//Los elementos tienen que guardarse en el mismo orden que se van ingresando
//Mostrar en consola la primera y última canción
//Mostrar en consola el contenido del array
//Resultado esperado:
//"T-Shirt"
//"Concrete and Gold"
//["T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold"]


//Ejercicio Array 017

var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"]

//Recorrer la lista de canciones con un ciclo y mostrarlas en consola una a una utilizando console.log()
//De inicio a fin
//De fin a inicio

for (let index = 0; index <= playlist.length-1; index++) {
   console.log (playlist[index]);
}

for (let index = playlist.length-1; index >= 0 ; index--) {
   console.log (playlist[index]);
}

//Ejercicio Array 018

var womenInTechi = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];

//Ordenar el array
//Mostrar en la consola el array ordenado
//Revertir el orden de la lista ordenada
//Mostrar en la consola el array revertido
//Unir los nombres de todas las mujeres en tecnología utilizando " - " para separarlos.

console.log(womenInTechi.sort());
console.log(womenInTechi.reverse());
console.log(womenInTechi.join(" - "));
//Ejercicio Array 019

var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']

//1Crear una variable playlistCompleta, con los nombres de todas las canciones que hay en playlistNirvana y playlistFoo.

var playlistCompleta = [];

for (let index = 0; index < playlistNirvana.length; index++) {
   playlistCompleta.push(playlistNirvana[index]);
}

for (let index = 0; index < playlistFoo.length; index++) {
   playlistCompleta.push(playlistFoo[index]);

}
console.log(playlistCompleta);

//Mostrar en consola los siguiente nombres de forma individual (uno por linea):

//2Nombres de las canciones de nirvana (a mano utilizando índices)
console.log(playlistNirvana[0]);
console.log(playlistNirvana[1]);
console.log(playlistNirvana[2]);
console.log(playlistNirvana[3]);

//3Nombres de los canciones de foo fighters (utilizando while)

var cantidadFoo = playlistFoo.length;

//var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'] //playlistFoo.length = 3
//while (cantidadFoo <= 3 && cantidadFoo>0 ) {
//    console.log (playlistFoo); //como *"$@## hago para que salga en consola uno y despues el otro y despues el otrooooooo!
//    cantidadFoo--;
//}

//4Nombres de todas las canciones entre ambas listas (utilizando for)
for (var index = 0; index <= playlistCompleta.length-1; index++) {
   console.log (playlistCompleta[index]);
}

//Ejercicio Array 026

//Tenemos un array en una variable masNumeros con números al azar.
//También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
//Recorré el array masNumeros y:
//Si el número es par, agregalo al array numerosPares
//Si el número es impar, agregalo al array numerosImpares
//Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

for (let index = 0; index < masNumeros.length; index++) {
   if (masNumeros%2 ==0) {
       numerosPares.push(masNumeros%2 ==0);
       masNumeros++;
       console.log("pares: ", numerosPares);


   }
}

console.log("pares: ", numerosPares);


//EJ 027
//Tenemos un array en una variable playlist con una lista de canciones de un disco.
//Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
playlist.forEach(function(pelis) {
   console.log(pelis)
});

//EJ 028
//Tenemos un array en una variable librosDeJS con una lista de libros de javascript.
//Queremos saber la cantidad de libros que tenemos en el array
//Nos pidieron que evitemos usar la propiedad length para contar los elementos de un array y que tenemos que usar si o si un forEach
//Completá el siguiente código para que funcione el último console.log() y muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros
var librosDeJS = [
 'JavaScript for Kids: A Playful Introduction to Programming',
 'Composing Software',
 'Eloquent JavaScript: A Modern Introduction to Programming',
 'JavaScript: The Good Parts',
 'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
 'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
 'JavaScript: The Definitive Guide',
 'You Don’t Know JS',
 'JavaScript Allongé: The Six Edition'
];
librosDeJS.forEach(function(totalLibros){
   return totalLibros
});
/// ¡escribir en este espacio la solución del ejercicio!
console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');


















