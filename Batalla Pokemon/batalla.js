var jugadorUno = prompt("Elige tu pokemon", "");
var jugadorDos = prompt("Elige tu pokemon", "");

var pikachu = {
   nombre: "Pikachu",
   ataque: 20,
   vida: 100,
   atacar: function(atacado){
       atacado.vida = atacado.vida - this.ataque;
   }
}

var charmander = {
   nombre: "Charmander",
   ataque: 5,
   vida: 200,
   atacar: function(atacado){
       atacado.vida = atacado.vida - this.ataque;
   }
}

if(jugadorUno === "pikachu"){
   jugadorUno = pikachu
   console.log(jugadorUno);
} else if (jugadorUno === "charmander"){
   jugadorUno = charmander
   console.log(jugadorUno);
}

if (jugadorDos === "pikachu"){
   jugadorDos = pikachu
   console.log(jugadorDos);
} else if (jugadorDos === "charmander"){
   jugadorDos = charmander
   console.log(jugadorDos);
}

while (jugadorUno.vida !== 0 && jugadorDos.vida !== 0){
   console.log("FIGHT")
   console.log("Jugador Uno con " + jugadorUno.nombre + " ataca y tiene " + jugadorUno.vida + " de vida")
   console.log("Jugador Dos con " + jugadorDos.nombre + " defiende y tiene " + jugadorDos.vida + " de vida")
   jugadorUno.atacar(jugadorDos)
   jugadorDos.atacar(jugadorUno)

   if (jugadorUno.vida === jugadorDos.vida){
       console.log("Hubo empate")
   } else if (jugadorUno.vida <=0){
       console.log("GANÓ PLAYER DOS, con el pokemon " + jugadorDos.nombre.toUpperCase())
   } else if (jugadorDos.vida <=0){
       console.log("GANÓ PLAYER UNO, con el pokemon " + jugadorUno.nombre.toUpperCase())
   }
}




