// // SWITCH

// var nombrex = "Marta";
// var mensajex = null;

// switch (nombrex) {
//     case "Miriam":
//         mensajex = "El nombre de la usuaria es Miriam";
//         break;
//     case "Feli":
//         mensajex = "El nombre de la usuaria es Feli";
//         break;
//     case "Xime":
//         mensajex = "El nombre de la usuaria es Xime";
//         break;
//     case "Jose":
//         mensajex = "El nombre de la usuaria es Jose";
//         break;
//     default:
//         mensajex = "El nombre de la usuaria no es Marta, Felipa, Xime o Jose";
// }
// console.log(mensajex);


// //FOR


// for (var numeriyo = 0; numeriyo < 9; numeriyo++) {
//     console.log(numeriyo);

// }

// for (var i = 0; i < 1000; i++) {
//     break;
// }
//ganadorUno.length <= 2 || ganadorDos.length <= 2

// var ganadorUno = [];
// var ganadorDos = [];

// while (ganadorUno <= 2 && ganadorDos <= 2) {

//     var jugadorUno = prompt("Jugador Uno: piedra papel o tijera?");
//     var jugadorDos = prompt("Jugador Dos: piedra papel o tijera?");



//     switch (jugadorUno) {
//         case "piedra":
//             switch (jugadorDos) {
//                 case "papel":
//                     console.log("Gano jugador Dos");
//                     ganadorDos.push(1);
//                     break;
//                 case "tijera":
//                     console.log("Gano jugador Uno");
//                     ganadorUno.push(1);
//                     break;
//                 default: console.log("Empate");
//                     break;
//             }
//             break;
//         case "papel":
//             switch (jugadorDos) {
//                 case "piedra":
//                     console.log("Gano jugador Uno");
//                     ganadorUno.push(1);
//                     break;
//                 case "tijera":
//                     console.log("Gano jugador Dos");
//                     ganadorDos.push(1);
//                     break;
//                 default: console.log("Empate");
//                     break;
//             }
//             break;
//         case "tijera":
//             switch (jugadorDos) {
//                 case "piedra":
//                     console.log("Gano jugador Dos");
//                     ganadorDos.push(1);
//                     break;
//                 case "papel":
//                     console.log("Gano jugador Uno");
//                     ganadorUno.push(1);
//                     break;
//                 default: console.log("Empate");
//                     break;
//             }
//             break;

//         default: console.log("Vuelva a intentarlo")
//             break;
//     }

// }

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

