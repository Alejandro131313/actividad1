function esEntero(cadena) {
return cadena==parseInt(cadena);
}

function esPositivo(numero){
    return numero>0; 
}
function sumatorio(numero){
        let resultado=0;
for(let i=0;i<=numero;i++){
    resultado+=i;
}
    return resultado;       
}
do{
var num1=prompt("Introduzca un número");

if (esEntero(num1)){
console.log("Verdadero es entero");
}else
alert("No es entero");

if(esPositivo(num1)){
    console.log("Verdadero es positivo")
}
else{
    alert("No es positivo")
}
console.log("Sumatorio "+sumatorio(num1));
}
while(!esEntero(num1)&&!esPositivo(num1));