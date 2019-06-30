//OBJETOS
//obj_001

var persona = {
}

console.log(persona)

//obj_002

var sobreMi = {
    nombre: "Antonela",
    apellido: "Rossi",
    edad: 33,
}

console.log(sobreMi)

//obj_003

var user = {
    fullname: "Caritouuuu",
    email: "carito@carito.com",
    age: "40",
}

console.log("Hola, mi nombre es " + user.fullname + " y tengo " + user.age)

//obj_004
//Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
//Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
//El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

var song = {
    title: 'Rock and Roll',
    bandName: 'Led Zeppelin',
    duration: 166000,
    album: 'Led Zeppelin IV'
}

var cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration / 1000
    // completar el codigo
}

console.log(cancion);

//obj_005

//Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
//Los datos que tenemos son un id, email, nombre y teléfono
//Crear un objeto para cada persona que nos pasaron
//Mostrar por consola todos los objetos creados
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890


var persona1 = {
    indice: 0,
    mail: "ada@gmail.com",
    name: "Ada Lovelace",
    telefono: 1234567890,
}

var persona2 = {
    indice: 1,
    mail: "grace@hotmail.com",
    name: "Grace Hopper",
    telefono: 0987654321,
}

var persona3 = {
    indice: 2,
    mail: "hedy@gmail.com",
    name: "Hedy Lamarr",
    telefono: 6789054321,
}

var persona4 = {
    indice: 3,
    mail: "radia@yahoo.com",
    name: "Radia Perlman",
    telefono: 1234509876,
}

var persona5 = {
    indice: 4,
    mail: "Sheryl@facebook.com",
    name: "Sheryl Sandberg",
    telefono: 5432167890,
}

console.log(persona1, persona2, persona3, persona4, persona5)

//obj_006

// 1. El nombre de Ada:
console.log(persona1.name);

// 2. El ID de Grace
console.log(persona2.indice);

// 3. El email de Hedy
console.log(persona3.mail);

// 4. El ID y nombre de Radia
console.log(persona4.indice);

// 5. El telefono de Sheryl
console.log(persona5.telefono);




//obj_007.js
//Tenemos la variable datos que tiene un objeto con los datos de una persona
//El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
//También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos = {
    id: 1,
    nombre: 'Ada',
    apellido: 'Lovelace',
    email: 'ada.lovelace@gmail.com',
    telefono: '1234567890',
    edad: '29',
    programa: true
}

datos.edad = 29;
datos.telefono = 0651212121;

console.log(datos);


//obj_008
//Tenemos la variable datos con un objeto que guarda datos de personas
//Tenemos que programar la siguiente lógica
//SI la propiedad programa es true
//Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datitos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
}

if (propiedad = true) { 
    datitos.lenguajeFavorito = "Javascript";
} 

console.log(datitos);

//obj_009
//Tenemos la variable datos con un objeto que guarda datos de una persona
//Tenemos que programar la siguiente lógica
//SI la propiedad programa es true
//Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
//Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

var datelos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
};

if (propiedad = true) { 
    datelos.lenguajeFavorito = [ "Javascript","CSS","Python"]
} 

console.log("Hola, mi nombre es " + datelos.nombre +  " y programo en " + datelos.lenguajeFavorito);


//obj_010
//Tenemos la variable disco con un objeto que guarda datos de un album musical
//Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
//Completá el código para lograr el resultado esperado
var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

var nombreBanda = disco.banda.nombre;
var anioDisco = disco.banda.anioFormacion;
var nombreeDisco = disco.nombre;
//var anioDisco = ;
//var nombreBanda = ;

console.log("El disco " + nombreeDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);


//obj_011.js
//Tenemos la variable user, que es un objeto con datos de una persona en linkedin
//En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
//Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

var user = {
  id: 123456789,
  name: 'Ada Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS']
};

user.skills.push("Javascript");

console.log(user);

//obj_012
//Tenemos la variable user, que es un objeto con datos de una persona en linkedin
//En el objeto tenemos dos propiedades: firstName y lastName
//Por un cambio en los requerimientos del proyecto, necesitamos que el nombre sea un objeto con el siguiente formato:

var user = {
  name: {
    first: 'Grace',
    last: 'Hopper'
  },
  // y las demas propiedades
}
//Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName. 
//El nombre hay que guardarlo con el formato expresado en el punto anterior.
//Completa el código para conseguir el resultado esperado

var user = {
  id: 123456789,
  firstName: 'Ada',
  lastName: 'Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS', 'JS']
};
var newUser = user;

delete newUser.firstName;
delete newUser.lastName;

newUser.name = {
    first: "Grace",
    last: "Hopper",
}

console.log(newUser.name);
console.log(newUser)

//obj_013
//Creá un objeto donde vamos a guardar información sobre una playlist de spotify
//El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
//En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
//Lista de Nirvana
//Privada: Si
//Canciones:
//Smells Like Teen Spirit
//In Bloom
//Come As You Are
//Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la propiedade privada es false

var spotify = { 
    nombre: "",
    privada: true,
    canciones: [ ],
} 

spotify.nombre = "Lista de Nirvana",
spotify.canciones.push("Smells Like Teen Spirit", "In Bloom", "Come As You Are");

console.log(spotify.nombre);
if (spotify.privada = true) { 
console.log("Privada: SI")
};
for (let index = 0; index < spotify.canciones.length; index++) {
    console.log("Canciones")
    console.log(spotify.canciones[index])
}


//obj_014
//Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
//Cada objeto tiene las propiedades nombre, temporada y foto.
//Iterá/Recorré el array utilizando forEach y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

var ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];


ganadoras.forEach(function(elemento, indice){ //SIEMPRE FOREACH ES elemento, indice, array FUCKIN MAGIC
    console.log(elemento.nombre + " ganó la temporada número " + (indice +1));
});

//obj_015.js
//Tenemos el array anterior de objetos, con las ganadoras de algunas temporadas de Rupaul.
//Iterá/Recorré el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

for (let index = 0; index < ganadoras.length; index++) {
    console.log(ganadoras[index].nombre+ " ganó la temporada número " + ganadoras[index].temporada); //PRIMERO TENGO QUE ENTRAR AL OBJETO DEL ARRAY! Y DPS A LA PROPIEDAD
}

// [ ]  < >  { } 

