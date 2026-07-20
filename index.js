const prompt = require('prompt-sync')();
//- Variáveis
let idade = prompt('Bem-vindo ao Desafio do Felipão! Para iniciar, digite a sua idade: ');

if (idade < 10) {
  console.log('Este jogo é recomendado para maiores de 10 anos!');
  process.exit();
}

let name = 'Zev';
let xp;

//- Laços de repetição
do {
  xp = prompt('Digite um número entre 1 e 9: ');
} while (xp < 1 || xp > 9);

let anoAtual = 2026;

//Operadores: Fórmula criada apenas para praticar operadores matemáticos.
let resultado = ((anoAtual - idade) * idade) / xp;

let nivelHeroi = resultado;

// Estruturas de decisão
function calcularNivelHeroi(nivelHeroi) {
  if (nivelHeroi <= 1000) return 'Ferro';
  if (nivelHeroi >= 1001 && nivelHeroi <= 2000) return 'Bronze';
  if (nivelHeroi >= 2001 && nivelHeroi <= 5000) return 'Prata';
  if (nivelHeroi >= 5001 && nivelHeroi <= 7000) return 'Ouro';
  if (nivelHeroi >= 7001 && nivelHeroi <= 8000) return 'Platina';
  if (nivelHeroi >= 8001 && nivelHeroi <= 9000) return 'Ascendente';
  if (nivelHeroi >= 9001 && nivelHeroi <= 10000) return 'Imortal';
  if (nivelHeroi >= 10001) return 'Radiante';
}

console.log(
  'O Herói de nome ' + name + ', está no nível ' + calcularNivelHeroi(nivelHeroi) + '!');