// 40) Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

const prompt = require('prompt-sync')({sigint: true})

let contador = 0 + 3;

while (contador + 3) {
  console.log(contador);
  contador--;
}

console.log("Acabou");