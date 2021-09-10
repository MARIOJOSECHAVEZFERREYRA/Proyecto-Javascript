
// CUADRADO
console.group("cuadrados");

// AREA DEL CUADRADO
function areacuadrado(lado){
    return lado **2;
}
function calcularAreacuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areacuadrado(value);
    alert(area);
}

// PERIMETRO DEL CUADRADO
function perimetroCuadrado(lado){ 
    return lado * 4;
} 
function calcularPerimetrocuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
console.groupEnd();



//CODIGO DEL TRIANGULO
console.group("Triangulo");
// PERIMETRO TRIANGULO
function perimetrotriangulo(ladoA,ladoB,base){
    return Number.parseInt(ladoA) +  Number.parseInt(ladoB) + Number.parseInt(base);
}
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("ladoAtriangulo");
    const ladoAvalue = ladoA.value;
    const ladoB = document.getElementById("ladoBtriangulo");
    const ladoBvalue = ladoB.value;
    const Base = document.getElementById("baseTriangulo");
    const  Basevalue = Base.value;

    const perimetro = perimetrotriangulo(ladoAvalue,ladoBvalue,Basevalue);
    alert(perimetro);
}
//ALTURA DEL TRIANGULO PARA HALLAR EL AREA
function alturaTriangulo(ladoA, ladoB, base){
    if(ladoA === ladoB){
        return Math.sqrt((ladoA * ladoA) - ((base / 2) * (base / 2)))
    } else{
        return (ladoA * ladoB) / base;
    } 
}
// AREA TRIANGULO
function areatriangulo(base,altura){
    return (base * altura)/2;
}
function calcularAreaTriangulo(){
    const ladoA = document.getElementById("ladoAtriangulo");
    const ladoAvalue = ladoA.value;
    const ladoB = document.getElementById("ladoBtriangulo");
    const ladoBvalue = ladoB.value;
    const Base = document.getElementById("baseTriangulo");
    const  Basevalue = Base.value;
    const altura = alturaTriangulo(ladoAvalue,ladoBvalue,Basevalue);
    const area = areatriangulo(altura,Basevalue);
    alert(area);
}
console.groupEnd();


// CODIGO DEL CIRCULO
console.group("circulo");
//PI
const PI = Math.PI;

//PERIMETRO
function PerimetroCirculo(radio){  
return radio * PI * 2;
}
function calcularPerimetroCirculo(){
    const Radio = document.getElementById("RadioCirculo");
    const RadioValue = Radio.value;
    const Perimetro = PerimetroCirculo(RadioValue);
    alert(Perimetro);
}
//AREA
function areacirculo(radio){ 
return (radio **2 ) * PI;
}
function calcularAreaCirculo(){
    const radio = document.getElementById("RadioCirculo");
    const RadioValue = radio.value;
    const area = areacirculo(radio.value);
    alert(area);
}


console.groupEnd();