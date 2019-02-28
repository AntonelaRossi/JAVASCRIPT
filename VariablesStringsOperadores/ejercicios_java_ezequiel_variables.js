//Ejercicio 1
//Crear un documento con el nombre ej1.js
//Declarar una variable nombre
//Declarar una variable apellido
//Declarar una variable edad
//Declarar una variable fecha de nacimiento utilizando camel case
//Declarar una variable direccion

var nombre;
var apellido;
var edad;
var fechaDeNacimiento;
var direccion;

//Ejercicio 10
//Crear un documento con el nombre ej10.js
//Declarar una variable saludo
//Asignar el valor: ¡Aguante ECMAScript! a la variable saludo, con el tipo de dato string
//Mostrar el contenido de la variable saludo utilizando console.log()

var saludo = "¡Aguante ECMAScript!";
console.log(saludo);


//Crear un documento con el nombre ej11.js
//Mostrar el siguiente mensaje: Me gusta mucho ECMAScript, en consola sin utilizar una variable

console.log("Me gusta mucho ECMAScript");

//Ejercicio 12
//Crear un documento con el nombre ej12.js
//Declarar una variable nombre con tu nombre
//Declarar una variable saludo con el siguiente mensaje: Bienvenida
//Mostrar en consola el mensaje de bienvenida utilizando console.log() y concatenando las variables nombre y saludo para que muestre un mensaje similar a: Bienvenida Ada

var nombre = "Rossita";
var saludo = "Bienvenida";

var mensajeBienvenida = saludo + " " + nombre;
console.log(mensajeBienvenida);

//Ejercicio 13
//Crear un documento con el nombre ej13.js
//Declarar una variable nombre con tu nombre
//Declarar una variable saludo con el siguiente mensaje: Bienvenida
//Mostrar en consola el siguiente mensaje: ¡Bienvenida Ada al curso de Frontend!
//Utilizar console.log(), las variable nombre, saludo y un valor string para el resto del mensaje que no está en una variable

console.log(mensajeBienvenida + " " + "al curso de Frontend!");

//Ejercicio 14
//Crear un documento con el nombre ej14.js
//Declarar una variable nombre con tu nombre
//Declarar una variable saludo con el siguiente valor: ¡Bienvenida
//Declarar una variable finDeSaludo con el siguiente valor: al curso de Frontend!
//Mostrar en consola el siguiente mensaje: ¡Bienvenida _Ada_ al curso de Frontend! utilizando console.log() y concatenando las 3 variables

var finDeSaludo = "al curso de Frontend!";
console.log(mensajeBienvenida + " " + finDeSaludo);

//Ejercicio 18
//Crear un documento con el nombre ej18.js
//Declarar una variable local con el valor: Jay's
//Declarar una variable mensaje con el valor: es el "mejor" local
//Mostrar en consola el mensaje: Jay's es el "mejor" local

var local = "Jay's";
var mensaje = 'es el "mejor" local';
console.log(local + " " + mensaje);

//Ejercicio 19
//Crear un documento con el nombre ej19.js
//Declarar una variable primerTexto con el valor: este texto tiene "comillas dobles"
//Declarar una variable segundoTexto con el valor: este texto tiene 'comillas simples'
//Mostrar en consola el valor de la variable primerTexto
//Mostrar en consola el valor de la variable segundoTexto

var primerTexto = 'este texto tiene "comillas dobles"';
var segundoTexto = "este texto tiene 'comillas simples'";
console.log(primerTexto);
console.log(segundoTexto);

//Ejercicio 2
//Crear un documento con el nombre ej2.js
//Declarar las siguientes variables de forma individual:
//nombre
//apellido
//edad
//fecha de nacimiento
//direccion
//Asignar un valor a cada variable con tus datos personales:
//Tu nombre
//Tu apellido
//Tu edad
//Tu fecha de nacimiento
//Tu direccion

var nombre;
var apellido;
var edad;
var fechaDeNacimiento;
var direccion;

nombre = "Antonela";
apellido = "Rossi";
edad = 33;
fechaDeNacimiento = "26 de Agosto de 1985";
direccion = "Av Diaz Velez 3957";

//Ejercicio 20
//Crear un documento con el nombre ej20.js
//Declarar la variable dia con el siguiente valor: el número del día de hoy
//Declarar la variable mes con el siguiente valor: el número del mes de hoy (ejemplo: 1 para Enero,2 para Febrero)
//Declarar la variable anio con el siguiente valor: año actual con 4 números (ejemplo: 2010)
//Mostrar en consola el siguiente mensaje: dia/mes/anio

var dia = 31;
var mes = 1;
var anio = 2019;
console.log(dia + "/" + mes + "/" + anio);

//Ejercicio 21
//Crear un documento con el nombre ej21.js
//Declarar una variable numérica edad con el siguiente valor: tu edad
//Declarar una variable numérica telefono con el siguiente valor: el número de tu telefono
//Declarar una variable string calle con el siguiente valor: el nombre de la calle donde vivis
//Declarar una variable numérica altura con el siguiente valor: altura de la calle donde vivis
//Mostrar en consola los siguientes mensajes:
//Tengo edad años
//Mi teléfono es telefono
//Vivo en calle al altura

var edad = 33;
var telefono = 1169267357;
var calle = "Av Diaz Velez";
var altura = 3957;
console.log("Tengo " + edad + "\n" + "Mi telefono es " + telefono + "\n" + "Vivo en " + calle + " " + altura);

//Ejercicio 22
//Crear un documento con el nombre ej22.js
//Declarar la variable salir y establecer el siguiente valor: true
//Declarar la variable usuarioRegistrado y establecer el siguiente valor: false
//Declarar la variable meGustaJs y establecer el siguiente valor: true
//Mostrar los valores de cada variable de la siguiente forma: console.log("nombreDeLaVariable", valor)

var salir = true;
var usuarioRegistrado = false;
var meGustaJs = true;
console.log("Salir", salir);
console.log("Usuario", usuarioRegistrado);
console.log("Me gusta js", meGustaJs);

//Ejercicio 23
//Crear un documento con el nombre ej23.js
//Declarar la variable nombre
//Mostrar el valor de la variable de la siguiente forma: console.log("nombreDeLaVariable", valor)

var nombres = "Rossita";
console.log("Nombres:", nombres);

//Ejercicio 24
//Crear un documento con el nombre ej24.js
//Declarar la variable nombre y asignar el siguiente valor: null
//Mostrar el valor de la variable de la siguiente forma: console.log("nombreDeLaVariable", valor)

var seVieneElNull = null;
console.log("Caja vacia", seVieneElNull);

//Ejercicio 25
//Crear un documento con el nombre ej25.js
//Vamos a definir un jugador de un juego de super heroes utilizando los siguientes nombres de variables y valores. Utilizar los tipos de datos correspondientes para cada variable
//nombreDeSuperHeroe: Batman
//nombre: Bruce Wayne
//vuela: no
//maneja: si
//vida: (valor de 0 a 100)
//trabajo: indefinido
//tiempoLibre: nulo
//Mostrar el valor de las variables de la siguiente forma: console.log("nombreDeLaVariable", valor)
//Mostrar el tipo de dato de las variables de la siguiente forma: console.log("nombreDeLaVariable", typeof nombreDeLaVariable)

var nombreDeSuperHeroe = "Batman";
var nombrex = "Bruno Diaz";
var vuela = false;
var maneja = true;
var vida = 33;
var trabajo;
var tiempoLibre = null;

console.log ("Nombre Super Heroe:", nombreDeSuperHeroe + "\n" + "Nombre Civil:", nombrex + "\n" + "Puede volar?", vuela + "\n" + "Sabe manejar?", maneja + "\n" + "Edad:", vida + "\n" + "Trabaja?", trabajo + "\n" + "Tiempo libre?", tiempoLibre);
console.log ("Nombre Super Heroe:", typeof nombreDeSuperHeroe + "\n" + "Nombre Civil:", typeof nombrex + "\n" + "Puede volar?", typeof vuela + "\n" + "Sabe manejer?", typeof maneja + "\n" + "Edad:", typeof vida + "\n" + "Trabaja?", typeof trabajo + "\n" + "Tiempo libre?", typeof tiempoLibre);

//Ejercicio 3
//Crear un documento con el nombre ej3.js
//Declarar las siguientes variables en una misma línea:
//nombre
//apellido
//edad
//fecha de nacimiento
//direccion
//Asignar un valor a cada variable con tus datos personales:
//Tu nombre
//Tu apellido
//Tu edad
//Tu fecha de nacimiento
//Tu direccion

var nombre1, apellido1, edad1, fechaDeNacimiento1, direccion1;
nombre1 = "Rossita";
apellido1 = "Rossi";
edad1 = 33;
fechaDeNacimiento1 = "26 de Agosto de 1985";
direccion1 = "Av Diaz Velez 3957";

console.log(nombre1 + "\n" + apellido1 + "\n" + edad1 + "\n" + fechaDeNacimiento1 + "\n" + direccion1);

//Ejercicio 4
//Crear un documento con el nombre ej4.js
//Declarar las siguientes variables de forma individual y asignarle a cada una un valor para describirte:
//nombre
//apellido
//edad
//fecha de nacimiento
//direccion

var nombre2 = "Antonela";
var apellido2 = "Rossi";
var edad2 = 33;
var fechaDeNacimiento2 = "26 de Agosto de 1985";
var direccion2 = "Av Diaz Velez 3957";

console.log(nombre2 + "\n" + apellido2 + "\n" + edad2 + "\n" + fechaDeNacimiento2 + "\n" + direccion2);

//Ejercicio 5
//Crear un documento con el nombre ej5.js
//Declarar las siguientes variables de forma individual y asignarle a cada una un valor para describirte:
//nombre
//apellido
//edad
//fecha de nacimiento
//direccion
//Mostrar en consola el valor de cada una de las variables utilizando console.log()

var nombre3;
var apellido3; 
var edad3;

nombre3 = "Bruno";
apellido3 = "Diaz";
edad3 = 33;

console.log (nombre3);
console.log (apellido3);
console.log (edad3);

//Ejercicio 6
//Crear un documento con el nombre ej6.js
//Declarar las siguientes variables de forma individual y asignarle a cada una un valor para describirte:
//nombre
//apellido
//edad
//fecha de nacimiento
//direccion
//Mostrar en consola el valor y nombre de cada una de las variables utilizando console.log()

var nombre3;
var apellido3; 
var edad3;

nombre3 = "Bruno";
apellido3 = "Diaz";
edad3 = 33;

console.log ("Nombre:", nombre3);
console.log ("Apellido:", apellido3);
console.log ("Edad:",edad3);



