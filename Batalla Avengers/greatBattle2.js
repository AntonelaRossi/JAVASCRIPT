var avengers = [
    {
        nombre: "Capitan America",
        ataque: 20,
        vida: 100,
        atacar: function (atacado) {
            atacado.vida = atacado.vida - this.ataque;
        }
    },
    {
        nombre: "Capitana Marvel",
        ataque: 50,
        vida: 200,
        atacar: function (atacado) {
            atacado.vida = atacado.vida - this.ataque;
        }
    },
    {
        nombre: "Black Widow",
        ataque: 30,
        vida: 200,
        atacar: function (atacado) {
            atacado.vida = atacado.vida - this.ataque;
        }
    },
    {
        nombre: "Ironman",
        ataque: 10,
        vida: 200,
        atacar: function (atacado) {
            atacado.vida = atacado.vida - this.ataque;
        }
    }

];

var jugadorUno = prompt("Elige tu avenger: Capitán America, Capitana Marvel, Ironman o Black Widow", "");
var jugadorDos = prompt("Elige tu avenger: Capitán America, Capitana Marvel, Ironman o Black Widow", "");

var lasPropiedades = Object.keys(avengers);

for (let index = 0; index < avengers.length; index++) {
    if (jugadorUno === avengers[index].nombre) {
        jugadorUno = avengers[index];
        console.log(jugadorUno);
    } 
    if (jugadorDos === avengers[index].nombre) {
        jugadorDos = avengers[index];
        console.log(jugadorDos);
    } 
}

while (jugadorUno.vida >= 0 && jugadorDos.vida >= 0) {
    console.log("FIGHT")
    console.log("Jugador Uno con " + jugadorUno.nombre + " ataca y tiene " + jugadorUno.vida + " de vida")
    console.log("Jugador Dos con " + jugadorDos.nombre + " defiende y tiene " + jugadorDos.vida + " de vida")
    jugadorUno.atacar(jugadorDos)
    jugadorDos.atacar(jugadorUno)

    if (jugadorUno.vida <= 0) {
        console.log("GANÓ PLAYER DOS, con el avenger " + jugadorDos.nombre.toUpperCase() + ", " + jugadorUno.nombre + " LTA")
    } else if (jugadorDos.vida <= 0) {
        console.log("GANÓ PLAYER UNO, con el avenger " + jugadorUno.nombre.toUpperCase() + ", " + jugadorDos.nombre + " LTA")
    } else if (jugadorUno.vida === 0 && jugadorDos.vida === 0) {
        console.log("Hubo un avenger-empate chicus")
    } 
}

