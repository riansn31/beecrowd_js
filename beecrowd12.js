var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valores = lines.shift().split(' '); 

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var triangulo = (A * C) / 2;
var circulo = 3.14159 * Math.pow(C, 2);
var trapezio = ((A + B) * C) / 2;
var quadrado = Math.pow(B, 2);
var retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
