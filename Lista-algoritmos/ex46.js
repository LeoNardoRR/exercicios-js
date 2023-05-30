// 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 
// 8 + 10 + 12 + 14 + ... + 98 + 100

const prompt = require('prompt-sync')()

let contador = 0

while(contador >=0){
    if (contador % 2 === 0) {
        console.log(contador)
}
    else{
        console.log(`Erro`)
    }
}