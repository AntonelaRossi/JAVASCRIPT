var ganadorUno = [];
var ganadorDos = [];


for (let index = 0; ganadorUno.length < 2 && ganadorDos.length < 2; index++) {

   var jugadorUno = prompt("Jugador Uno: piedra papel o tijera?");
   var jugadorDos = prompt("Jugador Dos: piedra papel o tijera?");

   if ((jugadorUno === "piedra" || jugadorUno === "papel" || jugadorUno === "tijera")
       && (jugadorDos === "piedra" || jugadorDos === "papel" || jugadorDos === "tijera")) {


       switch (jugadorUno) {
           case "piedra":
               switch (jugadorDos) {
                   case "papel":
                       console.log("Gano jugador Dos");
                       ganadorDos.push(1);
                       break;
                   case "tijera":
                       console.log("Gano jugador Uno");
                       ganadorUno.push(1);
                       break;
                   case "piedra":
                       console.log("Empate");
                       break;
                   default:
                       break;
               }
               break;
           case "papel":
               switch (jugadorDos) {
                   case "piedra":
                       console.log("Gano jugador Uno");
                       ganadorUno.push(1);
                       break;
                   case "tijera":
                       console.log("Gano jugador Dos");
                       ganadorDos.push(1);
                       break;
                   case "papel":
                       console.log("Empate");
                       break;
                   default:
                       break;
               }
               break;
           case "tijera":
               switch (jugadorDos) {
                   case "piedra":
                       console.log("Gano jugador Dos");
                       ganadorDos.push(1);
                       break;
                   case "papel":
                       console.log("Gano jugador Uno");
                       ganadorUno.push(1);
                       break;
                   case "tijera":
                       console.log("Empate");
                       break;
                   default:
                       break;
               }
               break;

           default:
               break;
       }


   } else {
       console.log("Escribiste todo mal, fijate: " +
           " Jugador Uno: " + jugadorUno + "" +
           " Jugador Dos: " + jugadorDos);
   }
}