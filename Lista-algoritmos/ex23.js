// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto
const prompt = require('prompt-sync')({sigint: true});

let nome = parseFloat(prompt(`Digite seu nome: `))
let sexo = parseFloat(prompt( `Digite se você é homem ou mulher: `))
let valor = parseFloat(prompt(`Digite o valor da sua compra: `))
let desconto = 0

if (sexo == 'homem'){
    let desconto = valor * 0.5 / 100
}
else if (sexo == 'mulher'){
    let desconto = valor * 0.13 / 100
}
else{
    console.log(`Invalido`)
}

console.log(`Seu desconto foi igual a ${desconto}`)