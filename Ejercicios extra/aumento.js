var dinero = 200;
var aumento = dinero * 5 / 100;
var resultado = dinero + aumento;


for (var diasDelMes = 1; diasDelMes <= 2; diasDelMes++) {
  document.write( "El dia " + diasDelMes + " ganamos " + resultado + "<br />");
  for (var diasDelMes = 2; diasDelMes <= 31; diasDelMes++) {
      resultado *= 1.05 ; // o 1 + 5/100
      document.write( "El dia " + diasDelMes + " ganamos " + resultado.toFixed(2) + "<br />");
  }
}

