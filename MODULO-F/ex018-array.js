//   Definindo um array.
let num = [5, 8, 2, 9, 3]

//   Inserindo novos elementos no array.
//num[5] = 14
//num.push(7)

//   Imprimindo.
console.log(num)
//   Pegando o comprimento.
console.log(`O comprimento do vetor é: ${num.length}`)
//console.log(`O vetor correspondente com elementos em ordem crescente é: `)
//   Deixando os elementos em ordem crescente.
//console.log(num.sort()) 
//   O sort() salva o vetor ordenado na variável. A partir daqui, se chamarmos
//   num, ele virá já ordenado.

//Percurso no vetor - Pegando os elementos um a um.
//for (let pos=0; pos<num.length; pos++) {
//    console.log(num[pos])
//}

//Versões recentes do ECMAScript - outro jeito de fazer o percurso.
for (let pos in num) {
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}

//Como buscar a posição de um elemento em um vetor.
console.log(num.indexOf(9))