console.log("JavaScript carregado!");

// Parte 2 — Variáveis e tipos
const nomeAluno = "Ana";
let idade = 20;
const matriculado = true;

console.log("Nome:", nomeAluno, "Tipo:", typeof nomeAluno);
console.log("Idade:", idade, "Tipo:", typeof idade);
console.log("Matriculado:", matriculado, "Tipo:", typeof matriculado);

// Parte 3 — Operadores
const numero1 = 10;
const numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);
console.log("Resto da divisão:", numero1 % numero2);
console.log("O primeiro número é maior que o segundo?", numero1 > numero2);
console.log("Eles são estritamente iguais?", numero1 === numero2);

// Parte 4 — Entrada e conversão
const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma dos valores:", n1 + n2);
console.log("Tipo de n1:", typeof n1);
console.log("Tipo de n2:", typeof n2);
console.log("Entrada inválida resulta em NaN?", Number.isNaN(n1) || Number.isNaN(n2));

// Parte 5.1 — Maioridade
const idadeInformada = Number(prompt("Digite sua idade:"));
if (idadeInformada >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Parte 5.2 — Classificação de nota
const nota = Number(prompt("Digite uma nota de 0 a 100:"));
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Parte 5.3 — Número par ou ímpar
const numeroInteiro = Number(prompt("Digite um número inteiro:"));
if (numeroInteiro % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

// Parte 6 — Depuração
const idadeDepuracao = Number(prompt("Idade:"));

if (idadeDepuracao === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Idade diferente de 18");
}

console.log(idadeDepuracao);
// Problemas corrigidos: atribuição (=) no lugar de comparação, texto convertido para number
// e identificador Idade escrito com maiúscula e diferente da variável declarada.

// Desafio final — Situação do aluno
const nome = prompt("Nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) / 2;
const situacao = media >= 70 ? "Aprovado" : "Reprovado";

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);
