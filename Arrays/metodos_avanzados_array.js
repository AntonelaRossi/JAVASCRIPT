//recibe como parametro una funcion!
//forEach, Map y Reduce, solo reciben como parametros FUNCIONES
var array = [1,2,3,4];


// FOR EACH: recorre el array acada elemento le ejecuta el codigo de adentro de la funcion
// TE DEVUELVE LOS ELEMENTOS DEL ARRAY! (map te devuelve un array)
var nuevoArray = array.forEach(function(param){    //funciones anonimas // param es lo mas comun para marcar parametro que no sabemos que es
    //codigo de la funcion
    console.log(param);
});  
// este metodo devuelve un nuevo array,por eso se le adjudica una nueva variable
// el nuevo array se hace porque modifica el anterior y necesita un nuevo nombre (?)

console.log(array);
console.log(nuevoArray); // esto no me consologuea nada porque la funcion no devuelve NADA s le pones RETURN si

var nuevoArray = array.forEach(function(param){    
    return param
});  

console.log(nuevoArray);

// forEach(function (valorDelElemento, index, array) {
//     //valor del elemento es obligatorio
//     //indice es opcional
//     //array completo es opcional
    
// })

var array = ["Malena", "Maria", "Carla"]
array.forEach(function(a) {
    return document.write("<br>" + a)
})

//MAP

//crea n nuevo ray con lo que le paso a la funcion, NO TOCA EL ARRAY ORIGINAL
//CREA UN ARRAY

// var mascotas = ["Amanda", "Ibañez","Dominga"];
// var mascotasMayusculas = mascotas.map(function(mascotas) {
//     console.log(mascotas.toUpperCase())
// })


var mascotas = ["Amanda", "Ibañez","Dominga"];
var mascotasMayusculas = mascotas.map(function(mascotas) {
    return mascotas.toUpperCase()
})

console.log(mascotasMayusculas)

//FILTER

//tambien crea un nuevo array pero solo me quedo con lo que me interesa
//si son true los agrega al array

var edades = [10,12,88,32,55,67,92,29]

var mayoresDeEdad = edades.filter(function mayorDeEdad (edad){
    if (edad >=18) {
        return edad
    }
})

console.log(mayoresDeEdad);

//REDUCE
//DEVUELVE SOLO UN NUMERO FINAL, EL VALOR TOTAL
//SI O SI NECESITA LOS DOS PARAMETROS

var notas = [1,2,3,4,10,5];
var sumaDeNotas = notas.reduce(function (total,laNota) {
    return total + laNota;    
})

console.log(sumaDeNotas);

