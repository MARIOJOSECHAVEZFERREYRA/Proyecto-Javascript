// Codigo del cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado){ 
    return lado * 4;
} 
function areacuadrado(lado){
    return lado **2;
}

console.groupEnd();
// Codigo del triangulo

console.group("Triangulo");

function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areatriangulo(base,altura){
    return (base * altura)/2;
}
console.groupEnd();

// Codigo del circulo 
console.group("circulo");
//DIAMETRO 
function diametrocirculo(radio){  
return radio * 2;
}
//PI
const PI = Math.PI;
console.log("pi es: " +  PI);
//CIRCUNFERENCIA
function perimetrocirculo(diametro){  
return diametro  * PI;
}
//AREA
function areacirculo(radio){ 
return (radio **2 ) * PI;
}
console.groupEnd();