//EN ESTA VERSION LOS OBJETOS TIENEN NOMBRE a

var jugadorUno = prompt("Elige tu avenger: Capitán America, Capitana Marvel, Ironman o Black Widow", "");
var jugadorDos = prompt("Elige tu avenger: Capitán America, Capitana Marvel, Ironman o Black Widow", "");

var captainAmerica = {
    nombre: "Capitan America",
    ataque: 20,
    vida: 100,
    atacar: function(atacado){
        atacado.vida = atacado.vida - this.ataque;
    }
}

var captainMarvel = {
    nombre: "Capitana Marvel",
    ataque: 50,
    vida: 200,
    atacar: function(atacado){
        atacado.vida = atacado.vida - this.ataque;
    }
}

var blackWidow = {
    nombre: "Black Widow",
    ataque: 30,
    vida: 200,
    atacar: function(atacado){
        atacado.vida = atacado.vida - this.ataque;
    }
}

var ironman = {
    nombre: "Ironman",
    ataque: 10,
    vida: 200,
    atacar: function(atacado){
        atacado.vida = atacado.vida - this.ataque;
    }
}


if(jugadorUno === "capitan america"){
    jugadorUno = captainAmerica
    console.log("Player UNO eligio a " + jugadorUno.nombre);
} else if (jugadorUno === "capitana marvel"){
    jugadorUno = captainMarvel
    console.log("Player UNO eligio a " + jugadorUno.nombre);
} else if (jugadorUno === "ironman"){
    jugadorUno = ironman
    console.log("Player UNO eligio a " + jugadorUno.nombre);
} else if (jugadorUno === "black widow"){
    jugadorUno = blackWidow
    console.log("Player UNO eligio a " + jugadorUno.nombre);
} 

if(jugadorDos === "capitan america"){
    jugadorDos = captainAmerica
    console.log("Player DOS eligio a " + jugadorDos.nombre);
} else if (jugadorDos === "capitana marvel"){
    jugadorDos = captainMarvel
    console.log("Player DOS eligio a " + jugadorDos.nombre);
} else if (jugadorDos === "ironman"){
    jugadorDos = ironman
    console.log("Player DOS eligio a " + jugadorDos.nombre);
} else if (jugadorDos === "black widow"){
    jugadorDos = blackWidow
    console.log("Player DOS eligio a " + jugadorDos.nombre);
} 


while (jugadorUno.vida > 0 && jugadorDos.vida > 0){
    console.log("FIGHT")
    console.log("Jugador Uno con " + jugadorUno.nombre + " ataca y tiene " + jugadorUno.vida + " de vida")
    console.log("Jugador Dos con " + jugadorDos.nombre + " defiende y tiene " + jugadorDos.vida + " de vida")
    jugadorUno.atacar(jugadorDos)
    jugadorDos.atacar(jugadorUno)

    if (jugadorUno.vida === 0 && jugadorDos.vida === 0){
        console.log("Hubo un avengerEmpate chicus")
    } else if (jugadorUno.vida < 0){
        console.log("GANÓ PLAYER DOS, con el avenger " + jugadorDos.nombre.toUpperCase() + ", " + jugadorUno.nombre + " LTA")
    } else if (jugadorDos.vida < 0){
        console.log("GANÓ PLAYER UNO, con el avenger " + jugadorUno.nombre.toUpperCase() + ", " + jugadorDos.nombre + " LTA")
    }
}

