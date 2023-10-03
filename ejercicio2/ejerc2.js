function OrdenCreciente(num1,num2,num3,num4) {
    
if(num1<num2 && num2<num3 && num3<num4){

return true;
}else {
return false;}
}

function PedirNumero(){
let numero = parseInt(prompt("Introduzca un número"));
    while(numero!=parseInt(numero) && numero<=0){
alert("Numero no valido")
numero = parseInt(prompt("Introduzca un número"));
}
return numero;
}

const num1=PedirNumero();
const num2=PedirNumero();
const num3=PedirNumero();
const num4=PedirNumero();

const resultado =OrdenCreciente(num1,num2,num3,num4);

if (resultado){
    console.log("Estan en orden")
}else
console.log("No estan en orden")