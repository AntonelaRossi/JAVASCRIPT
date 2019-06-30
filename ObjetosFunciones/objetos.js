// // //{} esto es un objeto, literal

// // var miObjeto = {};
// // //objeto asignado a una variable, FIN

// // var persona = {
// //     nombre: "Ada", //estas son propiedades: blabla
// //     edad: 33, //va entre comas
// //     array: [1, 2, 3],
// //     bool: true,
// //     otroObjeto: { nombre: "Marce", edad: 29 }
// // };//se puede poner de todo en el objeto

// // console.log(persona);//js lee el objeto entero
// // console.log(persona.nombre);//js lee string
// // console.log(persona.edad);//js lee numero


// // persona.nombre = "Grace";
// // persona.edad = 22;


// // console.log(persona);

// // //tabien puedo agregar propieddades!
// // persona.dni = 31718920;
// // console.log(persona);

// // var persone = {
// //     nombre: "Ade",
// //     saludar: function () {
// //         console.log("Hola!");

// //     }
// // }

// // persone.saludar();
// // //Definicion METODO : propiedad de un objeto cuyo valor es una funcion

// // var personite = {
// //     nombre: "Adax",
// //     saludar: function (caca) {
// //         console.log("Mi nombre es " + caca + "!")
// //     }
// // }

// // personite.saludar("Rossi");


// // //PALABRA RESERVADA THIS

// // var persono = {
// //     nombre: "Ade",
// //     saludar: function () {
// //         console.log("Hola, mi nombre es " + this.nombre);
// //         //this llama lo que esta destro de ESTE objeto
// //     }
// // }

// // persono.saludar();


// // //puedo modificar con THIS cositas

// // var personi = {
// //     nombre: "Ade",
// //     edad: 20,
// //     saludar: function () {
// //         console.log("Hola, mi nombre es " + this.nombre);
// //         //this llama lo que esta destro de ESTE objeto
// //     },
// //     cumpleanios: function () {
// //         this.edad++;         
// //     }
// // }

// // console.log(personi.edad);
// // personi.cumpleanios();
// // console.log(personi.edad);

// //////////////////////////////////
// var pers = {
//     nombre:"Ada",
//     edad: 27,
//     darPlata: function(lalala) {
//        lalala.billetera++ // aca modifico /// podria ser otraPersona.billetera =50 o otraPersona.billetera +=1000
//     }
// };

// var otraPersona = {
//     nombre: "Grace",
//     billetera: 0,
// };

// console.log(otraPersona.billetera)

// var terceraPersona = {
//     nombre: "Marie",
//     billetera: 0,
// };

// //otraPersona y tercaraPersona son "coherentes" porque tienen la misma estructura de datos
// pers.darPlata(terceraPersona);
// pers.darPlata(otraPersona);


// //EJERCICIO CLASES

// var biblioteca = [
//     {
//         titulo: "Cumbres Borrascosas",
//         autor: "Emily Brontë",
//         leido: true
//     },
//     {
//         titulo: "Orlando",
//         autor: "Virginia Woolf",
//         leido: false
//     },
//     {
//         titulo: "Arbol de Diana",
//         autor: "Alejandra Pizarnik",
//         leido: false
//     }
//   ];



// for (let index = 0; index < biblioteca.length; index++) {
//     if (biblioteca[index].leido === true) { //(biblioteca[index].leido) es lo mismo porque la condicion del if siempre es TRUE
       
//         console.log("El libro " + biblioteca[index].titulo + " de " + biblioteca[index].autor + " fue leido");
//        } else {
//         console.log("El libro " + biblioteca[index].titulo + " de " + biblioteca[index].autor + " no fue leido");
// }
// }

// biblioteca.map(function(elemento,indice,array){
//     if (elemento.leido === true) {
//     console.log("El libro " + elemento.titulo + " fue leido");
//     } else {
//         console.log("El libro " + elemento.titulo + " no fue leido");
//     }
// })

// //Codear dos objetos asignados a las variables Pkach y Charmander
// //Cadda uno tiene tres propiedades nombre, vida y ataque
// //nombre string y ataque y vida numeros

// var pikachu = {
//     nombre: "PIKACHU",
//     vida: 1000,
//     ataque: 100,
//     atacar: function(){
//         //codigo aca
//     }
// }

// var charmander = {
//     nombre: "CHARMANDER",
//     vida: 500,
//     ataque: 90,
//     atacar: function (){
//         // codigo aca
//     }
// }

// pikachu.atacar()//charmander pierde 20 pts
// charmander.atacar()//pikachu pierde 20 pts


// //CLASE DOS MALE OBJETOS

// var persone = {
//     nombre: "Belen",
//     edad: 32,
//     saludar: function() {
//         console.log("Hola! mi nombre es " + this.nombre);
//     },
// }



// console.log(persone["nombre"]); 
// // o sino

// var propNombre = "nombre";
// console.log(persone[propNombre]);


//TRES FORMAS DE LLAMAR persone.nombre === persone["nombre"] === persone[propNombre]


//OBJECT KEYS

//retorna un array con las propiedades // con el NOMBRE DE LA PROPIEDAD 
//acepta un objeto como parametro

var persones = {
    nombre:"Ada",
    edad: 33,
}

console.log(Object.keys(persones));


var propiedadesDe = Object.keys(persones);

for (let index = 0; index < propiedadesDe.length; index++) {
    console.log("La propiedad " + propiedadesDe[index] + " tiene el valor " + persones[propiedadesDe[index]]);
    if(propiedadesDe[index] == "nombre") {
        console.log("La variable " + propiedadesDe[index] + " es " + persones[propiedadesDe[index]])
    }
}


//obj_022
//Partiendo de un objeto guardado en la variable user
//Verificar si tiene la propiedad email
//Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
//Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

var user = {
  username: 'ada_lovelace',
  password: '1234567890!'
};

// // acá tu solucion
// var propiedadess = Object.keys(user)

// for (let index = 0; index < propiedadess.length; index++) {
    
//     if (propiedadess[index]==="email"){
//         console.log("El usuario tiene la propiedad email")
//     } else {
//         console.log("El usuario no tiene la propiedad email")
//     };   
// }

//OOOOOOOOOOOOOO

var prop = Object.keys(user);
var mensaje = "El usuario no tiene mail";

user.email = "ada@asdja.com"
console.log(user)

for (let index = 0; index < prop.length; index++) {
    
    if (prop[index]==="email"){
        mensaje = "El usuario tiene la propiedad email"
    }
}
console.log(mensaje)


//EJERCICIO 16
var nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
 ];
 
 
 for (let index = 0; index < nevermind.length; index++) {
  var duracionTotal = nevermind [index].duracion
 
 }





    


    


