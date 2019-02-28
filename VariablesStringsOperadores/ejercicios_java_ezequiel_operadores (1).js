//Ejercicio 27
//Crear un documento con el nombre ej27.js
//Declarar 2 variables con los nombres numero1 y numero2

//Asignarle a cada variable un valor del tipo number
//Para cada operación mostrar el mensaje de la siguiente forma:

//Ejemplos: sumo 2 + 3 y el resultado es 5 (donde 2 y 3 son los valores de las variables y 5 es el resultado de la operación)
//Mostrar en consola el resultado de la suma de las dos variables
//Mostrar en consola el resultado de la resta de las dos variables
//Mostrar en consola el resultado de la multiplicación de las dos variables
//Mostrar en consola el resultado de la división de las dos variables
//Mostrar en consola el resultado del resto de las dos variables

var numero1 = 2;
var numero2 = 3;

var resultado = numero1 + numero2;
console.log(resultado);

var resultado = numero1 - numero2;
console.log(resultado);

var resultado = numero1 * numero2;
console.log(resultado);

var resultado = numero1 / numero2;
console.log(resultado);

var resultado = numero1 % numero2;
console.log(resultado);

//Ejercicio 28
//Crear un documento con el nombre ej28.js
//Declarar la variable numero y asignar el valor 9
//Mostrar en consola la tabla del 9 de 1 a 10 usando la variable numero

var numeroTabla = 9;

console.log (numeroTabla * 1, numeroTabla * 2, numeroTabla * 3, numeroTabla * 4, numeroTabla * 5, numeroTabla * 6, numeroTabla * 7, numeroTabla * 8, numeroTabla * 9 );

//Ejercicio 29
//Crear un documento con el nombre ej29.js
//Calcular y mostrar en consola el perímetro de un cuadrado (el perímetro es simplemente cuatro veces la longitud del lado)
//La longitud del lado es de 10

var ladoCuadrado = 10;

var perimetro = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;

console.log (perimetro);

//Ejercicio 30
//Crear un documento con el nombre ej30.js
//Calcular y mostrar en consola el área de un cuadrado (lado al cuadrado)
//La longitud del lado es de 5

var area = ladoCuadrado * ladoCuadrado;

console.log (area);

//Ejercicio 31
//Crear un documento con el nombre ej31.js
//Calcular y mostrar en consola el perímetro de un triangulo (sumar los lados)
//El lado 1 es de 10
//El lado 2 es de 20
//El lado 3 es de 5

var lado1 = 10;
var lado2 = 20;
var lado3 = 5;

var perimetroTriangulo = lado1 + lado2 + lado3;
console.log (perimetroTriangulo)

//Ejercicio 32
//Crear un documento con el nombre ej32.js
//Declarar la variable altura y asignar el valor 10
//Declarar la variable base y asignar el valor 4
//Mostrar en consola el cálculo del perímetro (suma de los lados) y el área (base por altura).

var altura = 10;
var base = 4;

var areaTriangulo = (base * altura)/2;
console.log (areaTriangulo); 

//Ejercicio 33
//Crear un documento con el nombre ej33.js
//Declarar la cariable cantidadDePersonas y asignar el valor 100
//Incrementar la cantidad de personas en 5
//Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
//Se dieron de baja 3 personas
//Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
//Compramos una empresa y los personas se duplicaron
//Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas

var cantidadDePersonas = 100;

cantidadDePersonas += 5;
console.log("Cantidad de personas:", cantidadDePersonas);

cantidadDePersonas -= 3;
console.log("Cantidad de personas:", cantidadDePersonas);

cantidadDePersonas *= 2;
console.log("Cantidad de personas:", cantidadDePersonas);

//Ejercicio 34
//Crear un documento con el nombre ej34.js
//Declarar 3 variables con los siguientes nombres: ingresos, ganancias, impuestos
//Asignar los siguientes valores a cada variable según corresponda:
//ingresos: asignar el valor 1000
//ganancias: asignar el valor 600
//impuestos: asignar el valor 500
//Este mes se esperan los siguientes objetivos:
//Generar al menos 800 pesos o más de ingreso
//Gastar menos de 400 pesos de impuestos
//Se Paga bono si se ganan 600 pesos de ganancias justo
//Mostrar en consola los siguientes mensajes utilizando los operadores esperados:
//Objetivo de ingresos: true o false
//Utilizar el operador mayor o igual que
//Objetivo de impuestos: true o false
//Utilizar el operador menor que
//Bono de ganancias: true o false
//Utilizar el operador de q simple

var ingresos = 1000;
var ganancias = 600;
var impuestos = 500;

console.log ("Este mes generamos 800 pesos o mas", ingresos >= 800);
console.log ("Este mes gastamos menos de 400 pesos en impuestos", impuestos < 400);
console.log ("Este mes cobramos bono", ganancias == 600);

//Ejercicio 35
//Crear un documento con el nombre ej35.js
//Declar la variable number numeroDeCliente y asignar el valor 143245
//Declar la variable numeroDeClienteIngresado y asignar el valor '143245'
//Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor)
//Utilizar el siguiente mensaje: El número ingresado por el cliente es correcto: true o false
//Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor y tipo de dato)
//Utilizar el siguiente mensaje: El cliente ingresó un número de cliente válido: true o false

var numeroDeCliente = 12345;
var numeroDeClienteIngresado = "12345";

console.log("El número ingresado por el cliente es:", numeroDeCliente == numeroDeClienteIngresado);
console.log("El número ingresado por el cliente es:", numeroDeCliente != numeroDeClienteIngresado);
console.log("El número ingresado por el cliente es:", numeroDeCliente === numeroDeClienteIngresado);


//Ejercicio 36
//Crear un documento con el nombre ej36.js
//Declarar las siguientes variables numero1 y numero2
//Asignar a numero1 el valor 10
//Asignar a numero2 el valor 20
//Mostrar en consola los siguientes mensajes:
//La variable numero1 y numero2 tienen el mismo valor: true/false
//La variables numero1 y numero2 son distintas: true/false

var numeroUno = 10;
var numeroDos = 20;

console.log("La variable numero 1 y numero 2 tienen el mismo valor:", numeroUno === numeroDos);
console.log("la variable numero 1 y numero 2  son distintas", numeroUno !== numeroDos);

//Ejercicio 37
//Crear un documento con el nombre ej37.js
//Declarar las variables promedioParaAprobar y promedioDelAlumno
//Asignar a promedioParaAprobar el valor 6
//Asignar a promedioDelAlumno el valor 4
//Mostrar en consola los siguientes mensajes:
//El alumno tiene un promedio mayor o igual que el requerido: true/false
//Al alumno le faltaron ${puntos} para aprobar

var promedioParaAprobar = 6;
var promedioDelAlumno = 4;

console.log ("El alumno tiene un promedio mayor o igual al requerido:", promedioDelAlumno >= promedioParaAprobar);
console.log ("Al alumno le faltaron " + (promedioParaAprobar -= promedioDelAlumno) + " puntos para aprobar");








