var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valores = lines.shift().split(' ');

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);
var C = parseInt(valores[2]);

var maiorAB = (A + B + Math.abs(A - B)) / 2;
var maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(parseInt(maior) + " eh o maior");