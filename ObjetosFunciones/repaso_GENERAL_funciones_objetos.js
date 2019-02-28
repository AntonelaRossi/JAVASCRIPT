var array = [
    "primero", 12345, [1,2,4,5],
    {nombre: "Ada", edad:27},
    true, function consola() {
        console.log("Hola");
        
    }
]

//para acceder al array 
//array[0]
//array.length
//array[PUEDO PONER CUALQUIER COSA QUE JS TRANSFORME A NUMERO]

var arrayAdentro = array [2];
//No se puede acceder a una array si no tiene nombre!
console.log(arrayAdentro[0]);
console.log(array[3].edad); // en los objetos es mas facil!! pues ya esta nombrada la propiedad

var hola = array[5];

hola()

// LA LECCION DE HOY ES PONERLE UNA VARIABLE A TODO a los elementos del array para poder acceder



//OBJETOS
var persona = {
    nombre: "Ada",
    edad: 27,
    array: [1,2,3,4,5],
    funcion: function (nombre) {

        var saludo = "Hola " + nombre
        return saludo
         //return devuelve de a UN dato

    }
};


console.log(persona.funcion("Ada"))



console.log(persona.array[persona.array.length-1]);




//FUNCIONES y parametros sirve para reutilizar las funciones por mil, son una especie de variable


function promedio (numero1, numero2) {
    var promedio = (numero1 + numero2) / 2
    var multiplicar = promedio * 5
    var dividir = multiplicar / 3  
    return dividir
}
//NO SE PUEDE ACCEDER A LAS VARIABLES CREADAS ADENTRO DE LA FUNCION
console.log(promedio(1,2));




