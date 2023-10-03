function validaOperador(operador) {
    return operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "FIN";
}
function divisionValida(dividendo, divisor) {
    return divisor != 0;
}

while (true) {

    const operador = prompt("Ingrese la operación  (+, -, *, / o FIN): ");
    if (!validaOperador(operador)) {
        console.log("Operador incorrecto.Eliga +, -, *, / o FIN.");
    }
    if (operador == "FIN") {
        console.log("Programa finalizado.");
        break;
    }
    const operando1 = parseInt(prompt("Ingrese el primer operando: "));
    const operando2 = parseInt(prompt("Ingrese el segundo operando: "));

    if (isNaN(operando1) || isNaN(operando2)) {
        console.log("Ingrese numeros válidos.");
    }
    if (operador == "/" && !divisionValida(operando1, operando2)) {
        console.log("Error no se puede dividir entre 0 ");
    }
    let resultado;

    switch (operador) {
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "*":
            resultado = operando1 * operando2;
            break;
        case "/":
            resultado = operando1 / operando2;
            break;
    }
    console.log("Resultado: " + resultado);
}