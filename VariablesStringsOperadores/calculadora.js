var numero1 = prompt ("ingrese el numero uno");
var operacion = prompt ("ingrese la operacion");
var numero2 = prompt ("ingrese el numero dos");
var resultado 

numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
 


/*
if (operacion == "+") {
    resultado (numero1 + numero2)
} else if (operacion == "-") {
    resultado (numero1 - numero2) 
} else if (operacion == "*") {
    resultado (numero1 * numero2)
} else if (operacion == "/"){
    resultado (numero1 / numero2)
} else {
    document.write("Error");
}

if (typeof(resultado)) !="undefined"){
     document.write(resultado;)
 }
*/

switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero1 / numero2;
        break;
    default: resultado = "Error";
}

document.write (resultado);



