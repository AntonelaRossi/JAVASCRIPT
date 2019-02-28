var intentosGanados1 = [];
var intentosGanados2 = [];



while (intentosGanados1 <= 2 && intentosGanados2 <= 2) {

    var opcionJugador1 = prompt("Jugador 1: piedra, papel o tijera?", "");
    var opcionJugador2 = prompt("Jugador 2: piedra, papel o tijera?", "");

    // una forma de validar inputs //
    if ((opcionJugador1 === "piedra"
        || opcionJugador1 === "papel"
        || opcionJugador1 === "tijera")

        && //& = Y// || los palitos son O

        (opcionJugador2 === "piedra"
            || opcionJugador2 === "papel"
            || opcionJugador2 === "tijera")) {

        //if inicial de arranca el juego, esta anidado
        if (opcionJugador1 === "piedra" && opcionJugador2 === "piedra") {
            console.log("Hay Empate");

        } else if (opcionJugador1 === "piedra" && opcionJugador2 === "papel") {
            intentosGanados2.push(1);
            console.log("Gano Jugador Dos");

        } else if (opcionJugador1 === "piedra" && opcionJugador2 === "tijera") {
            intentosGanados1.push(1);
            console.log("Gano Jugador Uno");

        } else if (opcionJugador1 === "papel" && opcionJugador2 === "piedra") {
            intentosGanados1.push(1);
            console.log("Gano Jugador Uno");

        } else if (opcionJugador1 === "papel" && opcionJugador2 === "papel") {
            console.log("Hay Empate");

        } else if (opcionJugador1 === "papel" && opcionJugador2 === "tijera") {
            intentosGanados2.push(1);
            console.log("Gano Jugador Dos");

        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "piedra") {
            intentosGanados2.push(1);
            console.log("Gano Jugador Dos");

        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "papel") {
            intentosGanados1.push(1);
            console.log("Gano Jugador Uno");

        } else if (opcionJugador1 === "tijera" && opcionJugador2 === "tijera") {
            console.log("Hay Empate");

        }  // cierro el if adentro del if anterior (el anindado) // 

        

        //cierra el if inicial  
    } else {
        console.log("Rescatate guachx, escribiste mal " +
            " Jugador 1: " + opcionJugador1 + "" +
            " Jugador 2: " + opcionJugador2);
    }

//cierra el while  
}

/*
//iteracion de jugadas//
while (intentosGanados1 < 2 && intentosGanados2 < 2) {
   console.log("Gano jugador 1");
}
*/