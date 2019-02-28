// var numero = 1;

// if (numero >= 2) {
//     console.log("Cumple con tutti");
//   } else {
//       console.log("No cumple");
//     }

//  var contrasena = "password123";
//  var nombre = "Rossita";

//  if (contrasena.length > 10 && nombre.length > 5) {
//      console.log ("contraseña ok");
//  }

// // Operador Ternario!!!!
// // para escribir menos codigo que if y else
// // Se escribe de la siguiente manera: (condicion) ? true : false
// // Es decir que dada una condición se ejecuta una parte o la otra


// var numero = 2;

// var mensaje = (numero === 2) ? 'El numero es 2' : 'El numero no es 2';

// console.log(mensaje);

// var numerito = 1;

// var mensajito = (numerito >= 2) ? "El numero es mayor a 2" : "El numero es menor a 2";

// console.log (mensajito);


// //otro ternario

// var numerol = 10;
// numerol === 10 ? console.log("es diez") : console.log("no es diez");

// // If Anidados 
// // mas de 3 ya es un switch

// var nombreMujer = "Marcela";

// if (nombreMujer === "Mariana") {
//     console.log ("Soy Mariana")
// } else if (nombreMujer === "Marcia") {
//     console.log ("Soy Marcia")
// } else {
//     console.log ("No soy Marcia, ni Mariana")
// }



// // SWITCH

// var nombrex = "Marta";
// var mensajex = null;

// switch (nombrex) {
//   case "Miriam":
//     mensajex = "El nombre de la usuaria es Miriam";
//     break;
//   case "Feli":
//     mensajex = "El nombre de la usuaria es Feli";
//     break;
//   case "Xime":
//     mensajex = "El nombre de la usuaria es Xime";
//     break;
//   case "Jose":
//     mensajex = "El nombre de la usuaria es Jose";
//     break;
//   default:
//      mensajex = "El nombre de la usuaria no es Marta, Felipa, Xime o Jose";
// }

// console.log(mensajex);

// var animales = "Gato";
// var textoMensaje = null; // podria ser var textoMensaje; (me da undefinied); o podria ser var textoMensaje = " ";

// switch (animales) {
//     case "Perro":
//         textoMensaje = "el animal es un Perro";
//         break; //si no pones break en cada case se te rompe todo
//     case "Jirafa":
//         textoMensaje = "el animal es una Jirafa";
//         break;
//     case "Ñandú":
//         textoMensaje = "el animal es un Ñandú";
//         break;
//         default: 
//         textoMensaje = "el animal no es Perro ni Jirafa ni Ñandú"
// }

// console.log(textoMensaje);




// //Truthy and Falsy (valores verdaderos y falsos)
// //En ECMAScript existen valores que se pueden transformar como true o false en una condición
// //Los siguientes valores se transformar en falso:
// //false
// //null
// //undefined
// //0
// //NaN
// //''
// //Cualquier otro valor se transforma en verdadero

// var numerola = 9;

// if (numerola == 10) {  // siempre recordar que 1 solo = es asignacion y == es comparacion
//     console.log("es diez")
// } else {
//     console.log("no es diez");
// }

// //WHILE // sirve para cuando no se exactamente cuando se van a terminar los datos hasta que cambie la condicion 

// var numerox = 0;

// while (numerox < 100) {   // la condicion no necesita ser si o si booleana como en el if, aunque javascript lo tuerce a booleano
//     console.log ("Numero: ", numerox + 1);
//     numerox++; // para que no se cuelgue, adentro de llaves le tengo que cambiar la condicion para que algun momento corte, para que se vuelva false, para que no sea un BUCLE INFINITOOOO
// }

// //DO WHILE
// // igual que while pero se ejecuta al menos una vez el do y dps puede entrar o no en el while.


// //FOR


// for (var numeriyo  = 0; numeriyo < 9; numeriyo++) {
//     console.log (numeriyo);

// }

// for (var i = 0; i < 1000; i++){
//     break;
//   }

// //EJ 50

// var numera = 100;

// if (numera % 2 == 0) {
//     console.log( "El numero es par");
// } else {
//     console.log ("El numero es impar");
// }


// //EJ 51
// var user = "ada2019";
// var password = "12345";

// if (user == "ada2019" && password == "12345") {
//     console.log ("El usuario esta autenticado y puede ver el contenido del sitio");
// } else ( console.log ("Error, no se pudo autenticar el usuario, intentelo mas tarde"));

// // Modificar el código para que cumpla con el nuevo requisito
// // Si el nombre del usuario es igual a 'ada2019' Y el password es igual a '12345' Entonces
// // Mostrar en consola el siguiente mensaje: El usuario está autenticado y puede ver el contenido del sitio
// // SI NO:
// // Mostrar en consola el siguiente mensaje: Error, no se pudo autenticar al usuario, puede intentarlo más tarde

// //EJ 49 y 52

// var numero3 = 10;
// var numero4 = 5;

// if (numero3 >= numero4) {
//    console.log("LA variable numero3 es mas grande que la variable numero4");
// } else {
//    console.log("LA variable numero3 NO es mas grande que la variable numero4");
// }

// //Ej 50 y 53
// // Crear un documento con el nombre ej50.js
// // Declarar la variable numero y asignar el valor 10
// // Si la variable numero es par Entonces mostrar en consola el mensaje: El número es par
// // Probar cambiar el valor de la variable numero por un número impar y volver a ejecutar

// var numer = 19;

// if (numer % 2 == 0) {
//    console.log("El numero es par")
// } else {
//    console.log("El numero es impar")
// }


// // Ej 51 y 54

// var user = "ada2019";
// var password = "123456"

// if (user == "ada2019" && password == "12345") {
//    console.log("El usuario esta autenticado y puede ver el contenido del sitio")
// } else {
//    console.log("Error, no se pudo autenticar al usuario, puede intentarlo mas tarde")
// }


// // Ej 55

// // var numero3 = 10;
// // var numero4 = 5;

// var mensajiyo = (numero3 >= numero4) ? "Numero3 es mayor que numero4" : "Numero3 NO es mayor que numero4";

// console.log(mensajiyo)


// // Ej 56

// var numerales = 19;

// var mensa = (numerales % 2 == 0) ? "El numero es par" : "El numero es impar";
// console.log(mensa);

// //Ej 57

// var user = "ada2019";
// var password = "12345"

// var con = (user == "ada2019" && password == "12345") ? "El usuario esta autenticado y puede ver el contenido del sitio" : "Error, no se pudo autenticar al usuario, puede intentarlo mas tarde";
// console.log(con);

// // Ej 58

// var hora = 22;

// if (hora < 12 && hora > 5) {
//    console.log("Buen dia")
// } else if (hora >= 12 && hora < 20) {
//    console.log("Buenas tardes")
// } else {
//    console.log("Buenas noches")
// }


// //Ej 59

// var numero5 = 200;
// var numero6 = 100;

// if (numero5 === numero6) {
//    console.log("los numeros son iguales")
// } else if (numero5 > numero6) {
//    console.log("numero5 es mayor a numero6")
// } else {
//    console.log("numero6 es mayor a numero5")
// }


// //Ej 60


// var nota = 10;

// if (nota >= 9) {
//    console.log("La alumna aprobo y es grosa");
// } else if (nota < 9 && nota >= 6) {
//    console.log("La alumna aprobo")
// } else {
//    console.log("La alumna no aprobo y debe hacer mas ejercicios")
// }

// //Ej 61

// // Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día
// // de la semana y se obtiene un mensaje como salida. En caso de ingresar un número que no
// // sea válido mostrar un mensaje de error

// // var dias = prompt("Ingrese un numero del 1 al 7");
// // var diasNumero = parseInt(dias);


// // // if (diasNumero === 1) {
// //     document.write("Domingo");
// //     } else if (diasNumero === 2) {
// //         document.write("Lunes");
// //     } else if (diasNumero === 3) {
// //         document.write("Martes");
// //     } else if (diasNumero === 4) {
// //         document.write("Miércoles");
// //     } else if (diasNumero === 5) {
// //         document.write("Jueves");
// //     } else if (diasNumero === 6) {
// //         document.write("Viernes");
// //     } else if (diasNumero === 7) {
// //         document.write("Sábado");
// //     } else {
// //         prompt("Ha ingresado un numero equivocado, por favor ingrese un numero del 1 al 7")
// // }


// // Ej 61 Versión SWITCH

// // var day = 6;
// // var nombreDelDay = null;

// // switch (day) {
// //     case 1:
// //         nombreDelDay = "Lunes";
// //         break;
// //     case 2:
// //         nombreDelDay = "Martes";
// //         break;
// //     case 3:
// //         nombreDelDay = "Miércoles";
// //         break;
// //     case 4:
// //         nombreDelDay = "Jueves";
// //         break;
// //     case 5:
// //         nombreDelDay = "Viernes";
// //         break;
// //     case 6:
// //         nombreDelDay = "Sábado";
// //         break;
// //     case 7:
// //         nombreDelDay = "Domingo";
// //     default:
// //         "Mal dia"
// //         break;
// // }

// // console.log("El dia seleccionado es " + nombreDelDay);

// //Ej 62
// // var mes = prompt("ingrese un dia un numero del 1 al 12")
// // var nombreDelMes = null;
// // var cantidadDeDias = null;
// // switch (mes) {
// //     case 1:
// //         nombreDelMes = "Enero";
// //         cantidadDeDias = "31";
// //         break;
// //     case 2:
// //         nombreDelMes = "Febrero";
// //         cantidadDeDias = "28/29";
// //         break;
// //     case 3:
// //         nombreDelMes = "Marzo";
// //         cantidadDeDias = "31";
// //         break;
// //     case 4:
// //         nombreDelMes = "Abril";
// //         cantidadDeDias = "30";
// //         break;
// //     case 5:
// //         nombreDelMes = "Mayo";
// //         cantidadDeDias = "31";
// //         break;
// //     case 6:
// //         nombreDelMes = "Junio";
// //         cantidadDeDias = "30";
// //         break;
// //     case 7:
// //         nombreDelMes = "Julio";
// //         cantidadDeDias = "31";
// //         break;
// //     case 8:
// //         nombreDelMes = "Agosto";
// //         cantidadDeDias = "31";
// //         break;
// //     case 9:
// //         nombreDelMes = "Septiembre";
// //         cantidadDeDias = "30";
// //         break;
// //     case 10:
// //         nombreDelMes = "Octubre";
// //         cantidadDeDias = "31";
// //         break;
// //     case 11:
// //         nombreDelMes = "Noviembre";
// //         cantidadDeDias = "30";
// //         break;
// //     case 12:
// //         nombreDelMes = "Diciembre";
// //         cantidadDeDias = "31";
// //         break;
// //     default:
// //         document.write ( "Error, ingrese un numero del 1 al 12")
// //         break;
// // }
// // document.write ("El mes seleccionado es " + nombreDelMes + " y tiene " + cantidadDeDias);
// // Ej 65
// var saldo = 0;
// if (saldo > 0) {
//    console.log("El usuario tiene " + saldo + " pesos a favor");
// } else {
//    console.log("El usuario no tiene saldo a favor");
// }
// // Ej 66
// var nume = 0;
// while (nume <=10) {
//    console.log (nume);
//    nume++
// }
// //Ej 67
// var numbero = 100;
// while (numbero >= 0) {
//    console.log(numbero);
//    numbero--
// }
// //Ej 68
// var numeroPar = 0;
// while (numeroPar <= 1000) {
//    console.log(numeroPar);
//    numeroPar+= 2;
// }
// //Ej 69
// // Crear un documento con el nombre ej69.js
// // Mostrar en consola la suma parcial de todos los
// // números que van desde 0 hasta 1000 utilizando la estructura while.

// //

// var numeroUno = 0;
// var numeroDos = 0;
// while (numeroUno <= 1000) {
//     numeroDos += numeroUno;
//     numeroUno ++;

//   console.log (numeroDos, "mami");
// }

// //otra version

// // var a= 0;
// // var b= 1;

// // while (b <= 1000) {
// //     console.log ("a", a, "b", b, "resultado", a + b);
// //     a = a+b;
// //     b++;

// // }



// //Ej 70

// // Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

// var a= 1;
// var b= 3;

// while (b <= 1000) {
//     a = a+b;
//     b += 2;
//     console.log ("a", a, "b", b, "resultado", a + b); 
// }

// //Ej 71

// // Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while

// var tablaUno = 1;
// var tablaDos = 9;
// var resultado;

// while (tablaUno <= 10) {
//     resultado = tablaUno*tablaDos;
//     tablaUno++;
//     console.log(resultado, "holus");

// }


// //Ej 72

// // Crear un documento con el nombre ej72.js
// // Mostrar en consola el siguiente dibujo utilizando la estructura while
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// // *******
// // ********
// // *********
// // **********
// // ***********
// // ************
// // *************

// var asterisco = "*";


// while (asterisco.length <=13) { 

//         console.log (asterisco);
//         asterisco += "*";

// }



// //Ej 73

// // Crear un documento con el nombre ej73.js
// // Mostrar en consola el siguiente dibujo utilizando la estructura while
// // *************
// // ************
// // ***********
// // **********
// // *********
// // ********
// // *******
// // ******
// // *****
// // ****
// // ***
// // **
// // *

// var asterisco = "*************";
// var contador = 12;
// var acumulado;

// while (contador >= 0) { 
//     acumulado = asterisco.slice (0, contador);

//     console.log (acumulado);
//     contador--;


// }

// //explicacion del demonio while dentro de whiles!

// var base = 5;
// var resta = 5;
// var g = "*";

// while (base > 0) {

//     while (resta >=0) {
//         g = g + "*";
//         resta--
//     }
//     console.log(g);
//     resta = base -1;
//     g = "";
//     base--;

// }


// //Ej 74

// // Crear un documento con el nombre ej74.js
// // Mostrar en consola el siguiente dibujo utilizando la estructura while
// // *
// // ***
// // *****
// // *******
// // *********
// // ***********
// // *************

// var asterisco = "*";


// while (asterisco.length <=13) { 

//         console.log (asterisco);
//         asterisco += "**";

// }

// //Ej 75

// // Crear un documento con el nombre ej75.js
// // Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
// // 0 1 1 2 3 5 8 13 21 34


// var d = 0;
// var e = 1;
// var f = d + e; 

// while ( d <= 40) {
//     d = e;
//     e = f;
//     f = (d + e);

// console.log (f)

// }

// // Ej 66

// var nume = 0;

// // while (nume <=10) {
// //   console.log (nume);
// //   nume++;
// //}

// //Ej 76
// //Modificar el código utilizando la estructura do/while en lugar de while

// do {
//    console.log (nume);
//    nume++;
// } while (nume <=10);


// //Ej 67

// var numero = 100;

// //while (numero >= 0) {
// //   console.log(numero);
// //   numero--
// //}

// //Ej 77

// //Modificar el código utilizando la estructura do/while en lugar de while

// do {
//    console.log(numero);
//    numero--
// } while (numero >= 0);

// //Ej 68

// var numeroPar = 0;

// //while (numeroPar <= 1000) {
// //   console.log(numeroPar);
// //   numeroPar+= 2;
// //}

// //Ej 78

// //Modificar el código utilizando la estructura do/while en lugar de while

// do {
//    console.log(numeroPar);
//    numeroPar+= 2;
// } while (numeroPar <= 100);

// //Ej 69

// // Mostrar en consola la suma parcial de todos los
// // números que van desde 0 hasta 1000 utilizando la estructura while.

// var a = 0;
// var b = 1;
// var c = a+b;

// //while (b<= 1000) {
// //    console.log (a+b);
// //    a += b;
// //    b++;
// //}

// //Ej 79

// //Modificar el código utilizando la estructura do/while en lugar de while

// do {
//    console.log (a+b);
//    a += b;
//    b++;
// } while (b<= 1000);

// //Ej 70

// // Mostrar en consola la suma parcial de los
// // números impares que van desde 0 hasta 1000 utilizando la estructura while.

// var d = 0;
// var e = 1;
// var f = d + e;

// //while ( e <= 1000) {
// //    console.log (" d ", d, " e ", e, " suma ", d+e);
// //    d += e;
// //    e += 2;
// //}

// //Ej 80

// //Modificar el código utilizando la estructura do/while en lugar de while

// do {
//    console.log (" d ", d, " e ", e, " suma ", d+e);
//    d += e;
//    e += 2;
// } while (e <= 1000);

// // Todos los ejercicios de dowhile son iguales chauuuuuuu

// //Ej 71

// //Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while

// var tabla = 1;
// var nueve = 9;

// while (tabla <= 10) {
//    console.log(tabla*9);
//    tabla++;
// }

// //Ej 72

// //Mostrar en consola el siguiente dibujo utilizando la estructura while
// //*
// //**
// //***
// //****
// //*****
// //******
// //*******
// //********
// //*********
// //**********
// //***********
// //************
// //*************

// var asterisco = "*";
// var asterisco2 = "*";

// while (asterisco.length <= 13 ) {
//    console.log (asterisco);
//    asterisco += asterisco2;
// }

// //Ej 73

// //Mostrar en consola el siguiente dibujo utilizando la estructura while

// //*************
// //************
// //***********
// //**********
// //*********
// //********
// //*******
// //******
// //*****
// //****
// //***
// //**
// //*

// var estrellitas = "*************"; // ahora son trece
// var resta;

// while (estrellitas.length >= 1 ) { //arranca en 13
//    console.log (estrellitas);
//    resta = estrellitas.slice(0,(estrellitas.length - 1));
//    estrellitas = resta;

// } // te amo javascript
// // Ej 74

// //Mostrar en consola el siguiente dibujo utilizando la estructura while

// //*
// //***
// //*****
// //*******
// //*********
// //***********
// //*************

// var estrelladas = "*";
// var estrelladasDos = "**"

// while (estrelladas.length <= 13) {
//    console.log(estrelladas);
//    estrelladas += estrelladasDos;
// }

// // Ej 75

// //Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while

// //0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55

// // a + b = c
// // 0 + 1 = 1
// // c se convierte en a ----- a = c
// //         1 + 1 = 2
// //                     b = a  !!!!!
// //                 2 + 1 = 3
// //                         b = a antes que a = c pues sino enloquece la matrix
// //                         3 + 2 = 5
// // cuidado con el a c v
// //                                 5 + 3 = 8

// var a = 0;
// var b = 1;
// var c;

// while (b <= 100) {
//    console.log (a)
//    c =(a + b);
//    b = a;
//    a = c;
// }


// // Ej 86

// //Modificar el código del 76 utilizando la estructura for en lugar de do/while

// //var nume = 0;

// //do {
// //    console.log (nume);
// //    nume++;
// //} while (nume <=10);

// for (var numerin = 0; numerin <= 10; numerin++) {
//    console.log ("El número ", numerin, " ama a FOR");
// }


// //Ej 87

// //Modificar el código del 87 utilizando la estructura for en lugar de do/while

// // var numero = 100;

// //do {
// //    console.log(numero);
// //    numero--
// //} while (numero >= 0);

// for (var numeree = 100; numeree >= 0 ; numeree--) {
//    console.log(numeree);
// }

// //Ej 89

// // Mostrar en consola la suma parcial de todos los
// // números que van desde 0 hasta 1000 utilizando la estructura while.

// //var a = 0;
// //var b = 1;

// //do {
// //    console.log (a+b);
// //    a += b;
// //    b++;
// //} while (b<= 1000);

// var a = 1

// for (var b = 0; b <= 1000; b ++) {
//    console.log (a+b);
//    a += b;
// }


// //Ej 90

// // Mostrar en consola la suma parcial de los
// // números impares que van desde 0 hasta 1000 utilizando la estructura while.

// var d = 0;
// var e = 1;
// var f = d + e;

// //while ( e <= 1000) {
// //    console.log (" d ", d, " e ", e, " suma ", d+e);
// //    d += e;
// //    e += 2;
// //}

// for (var e  = 1; e <= 1000;e +=2) {
//    console.log (" d ", d, " e ", e, " sumatoria ", d+e);
//    d += e;
// }

// //Ej 91

// //Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while

// //var tabla = 1;
// //var nueve = 9;

// //while (tabla <= 10) {
// //    console.log(tabla*9);
// //    tabla++;
// //}
// var table = 9
// var tableDos = 1


// // for (let index = 0; index <= 10; index++) {
// //     table*tableDos;

// // }

// for (var tabla = 1; tabla <=10; tabla++) {
//    console.log(tabla*9);
// }

// // te amo FORRRRR

// //Ej 92

// //Mostrar en consola el siguiente dibujo utilizando la estructura FOR
// //*
// //**
// //***
// //****
// //*****
// //******
// //*******
// //********
// //*********
// //**********
// //***********
// //************
// //*************


// // Ahora con FOR

// var asterisco = "*";
// var asterisco2 = "*";

// for (var i = 0; i <= 13; i++) {
//    console.log (asterisco);
//    asterisco += asterisco2;
// }

// //Ej 93

// //Mostrar en consola el siguiente dibujo utilizando la estructura while

// //*************
// //************
// //***********
// //**********
// //*********
// //********
// //*******
// //******
// //*****
// //****
// //***
// //**
// //*

// var estrellitas = "*************"; // ahora son trece

// for (let i = 13; i >= 1; i--) {
//    console.log (estrellitas);
//    var resta = estrellitas.slice(0,(estrellitas.length - 1));
//    estrellitas = resta;

// }


// // Ej 74

// //Mostrar en consola el siguiente dibujo utilizando la estructura while

// //*
// //***
// //*****
// //*******
// //*********
// //***********
// //*************

// var asterisco = "*";
// var asterisco2 = "**";

// for (var i = 0; i <= 13; i++) {
//    console.log (asterisco);
//    asterisco += asterisco2;
// }
// // Ej 95

// //Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while

// //0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55

// // a + b = c
// // 0 + 1 = 1
// // c se convierte en a ----- a = c
// //         1 + 1 = 2
// //                     b = a  !!!!!
// //                 2 + 1 = 3
// //                         b = a antes que a = c pues sino enloquece la matrix
// //                         3 + 2 = 5
// // cuidado con el a c v
// //                                 5 + 3 = 8

// var a = 0;
// var b = 1;
// var c;

// //while (b <= 100) {
// //    console.log (a)
// //    c =(a + b);
// //    b = a;
// //    a = c;
// //}

// for (let i = 0; i < 10; i++) {
//    console.log (a)
//    c =(a + b);
//    b = a;
//    a = c;

// }

// // Ej 96

// // Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000

// var numeralia = 0;

// for (let i = 0; i <= 10000; i+= 10) {
//    console.log(numeralia)
//    numeralia += 10;
// }

// // Ej 97

// // Mostrar en consola los números de 10 en 10 desde el 10000 hasta el 0
// // También mostrar en consola los valores restantes

// var numeralia = 10000;

// for (let i = 10000; i >= 0; i-= 10) {
//    console.log("El numero es", numeralia, ", el resto es ", (10000 - numeralia))
//    numeralia -= 10;
// }

// // Ej 98
// // Sumar los números del 0 al 1000
// // Cortar la ejecución si la suma es superior a 100
// // Mostrar el resultado final en consola

// var g = 0;
// var h = 1;
// var j = g + h;

// while (j <= 100 ) {
//   j = g + h;
//   g = j;
//   h++;
// }
// console.log("la ejecucion se corta cuando J=", j, " y g=", g, " y h=", h);


// // Ej 99

// //Sumar los números pares del 0 al 10000
// //Cortar la ejecución al encontrar 10 números pares
// //Mostrar en consola el resultado de los números hasta el momento del corte

// var k = 0;
// var l = 2;
// var m;

// for (let i = 0; i <=9; i++) {
//    m = k + l;
//    l += 2;
//    console.log (m);
// }


// //VARIABLES GLOBALES
// // var i=0 por fuera de for por ej
// // for (i, askfskfjd) {
// //      var pepe = "a"; esta es VARIABLE LOCAL
// //}

// // Porque en For i<array.length
// // el indice es menor al largo del array
// // i<array.length -1
// // Es raro que usemos un for para un NUMERO "de vueltas, siempre sirve para el array
// // es la manera que js accede a los arrays sin ir de a uno

// var arrayLetras = ["A","B","C"];

// for (let index = 0; index < arrayLetras.length; index++) {
//     if (arrayLetras[index] == "B") {
//         console.log ("posicion ", index, "nombre ", arrayLetras[index]);
//     }
// }



// // 0 al 1000 imprimir los pares con for
// for (var numeritos = 0; numeritos <= 1000 ; numeritos+=2) {
//     console.log(numeritos);
//  }

// var alumnas = ["maria","esther","consuelo","Barbara","Luisana","pancracia","luzbelita","Jimena"];

// for (let index = 0; index < alumnas.length; index++) {
//     console.log(alumnas[index].toUpperCase().charAt(0) + alumnas[index].slice(1, alumnas[index].length));


// }


// var stringss = ["soy","un","array","de","strings"];

// var primerValor = stringss[0];
// console.log(primerValor);


//Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 10).

//Guardar en variables el valor del primer, tercer y sexto elemento del array.
///Mostrar por consola los siguientes 3 mensajes:

//La banda en primer lugar es: [NOMBRE_DE_LA_PRIMER_BANDA]
//La banda en tercer lugar es: [NOMBRE_DE_LA_TERCER_BANDA]
//La banda en sexto lugar es: [NOMBRE_DE_LA_SEXTA_BANDA]

var bandas = ["Arcade Fire", "David Bowie", "MGMT", "Rejjie Snow", "M.I.A.", "Daft Punk", "Beck", "Lady Gaga", "Queen", "Grimes"];

var primeraBanda = bandas[0];
var tercerBanda = bandas[2];
var sextaBanda = bandas[5];

console.log("La banda en primer lugar es " + primeraBanda);
console.log("La banda en tercer lugar es " + tercerBanda);
console.log("La banda en sexto lugar es " + sextaBanda);

// Crear un documento con el nombre arr_004.js
// Crear el siguiente array con el nombre datos: [27, true, 'La edad de la persona es: ']
// Si el segundo item en el array datos es verdadero entonces
// Mostrar en consola: La edad de la persona es: 27
// Utilizar el primer y último item del array datos para formar el string del mensaje pedido


var datos = [27, true, "La edad de la persona es: "];

if (datos[1] === true) {
    console.log(datos[2] + datos[0]);
}

// Ejercicio Array 008
// Crear un documento con el nombre arr_008.js
// Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
// Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
// Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
// Mostrar en consola la cantidad de etiquetas guardadas en el array

var etiquetasHtml = ["div", "p", "br", "span", "head"];

console.log(etiquetasHtml[1].toUpperCase());
console.log(etiquetasHtml[4].toLowerCase());
console.log(etiquetasHtml.length);

console.log(etiquetasHtml.includes("div"));
etiquetasHtml.push("Chau");
console.log(etiquetasHtml);

//ej100 
//Mostrar en consola el siguiente dibujo de un cuadro lleno:
// *****
// *****
// *****
// *****
// *****
// Nota: algunos navegadores agrupan los mensajes en consola si son iguales. En ese caso, el resultado se verá así:

// (5) ***** 

var estrela = "*****";

for (let index = 0; index <= 4; index++) {
    console.log(estrela);

}

//ej101
// Mostrar en consola el siguiente dibujo de un cuadrado hueco:
// *****
// *   *
// *   *
// *   *
// *****
// Nota: algunos navegadores agrupan los mensajes en consola si son iguales. En ese caso, el cuadrado se verá así:

// *****
// (3) *   *
// *****
var espacios = "*   *"
console.log(estrela);
for (let index = 0; index <= 2; index++) {
    console.log(espacios);
}
console.log(estrela);



//Ejercicio 102
// Crear un documento con el nombre ej102.js
// Mostrar en consola el siguiente dibujo de un tablero de ajedrez:
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *

var espaciadosUno = "* * * * * * * *";
var espaciadosDos = " * * * * * * * ";

for (let index = 0; index <= 3; index++) {
    console.log(espaciadosUno);
    console.log(espaciadosDos);
}


//ej103
// Mostrar en consola el siguiente dibujo de un diamante:
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

var asterisc = "*"
var asterisc2 = "*";

for (var i = 0; i <= 7; i++) {
    console.log(asterisc);
    asterisc += asterisc2;
}

for (let i = 7; i >= 0; i--) {
    console.log(asterisc);
    var resta = asterisc.slice(0, (asterisc.length - 1));
    asterisc = resta;

}


//ej104
// Partiendo del siguiente código, realizar la suma de todos los números pares que hay entre el valor guardado en la variable n y 
//el valor guardado en m (incluyéndolo).

var n = 10;
var m = 26;
var resultado = 0;
var sumaLoca;
var x = 2


// // SOLUCION
while (x <= m) {

    sumaLoca = n + x;
    console.log("suma" + sumaLoca);
    x += 2
    resultado = resultado + sumaLoca
    console.log("resultado" + resultado)
}

console.log(resultado)

// console.log(resultado);
// // deberia mostrar 162
// // porque: 10 + 12 + 14 + 16 + 18 + 20 + 22 + 24 + 26
