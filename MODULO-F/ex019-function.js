/* ---------------- */
/* FUNÇÃO PAR IMPAR */
/* ---------------- */
function parimpar(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let input_par_impar = 5
let res = parimpar(input_par_impar)
console.log(`O número ${input_par_impar} é ${res}!`)

/* ----------- */
/* FUNÇÃO SOMA */
/* ----------- */

//Sem parâmetros default
//function soma(n1, n2) {
//    return n1 + n2
//}

//Com parâmetros default
function soma(n1=0, n2=0) {
    return n1 + n2
}

//Inputs
let n1 = 2
let n2 = 3

//Forma de testar se os parâmetros foram fornecidos.
//n1 = typeof(n1) == 'undefined' ? 0 : n1
//n2 = typeof(n2) == 'undefined' ? 0 : n2

if (typeof(n1) == 'undefined') {
    n1 = 0
    console.log(`Primeiro número não fornecido. Fazendo n1=0.`)
    console.log(`A soma entre ${n1} e ${n2} é ${soma(n1, n2)}.`)
} else if (typeof(n2) == 'undefined') {
    n2 = 0
    console.log(`Segundo número não fornecido. Fazendo n2=0.`)
    console.log(`A soma entre ${n1} e ${n2} é ${soma(n1, n2)}.`)
} else {
    console.log(`A soma entre ${n1} e ${n2} é ${soma(n1, n2)}.`)
}

//Chamando a função diretamente com um parâmetro não fornecido. Se a 
// função tiver valores default, dá tudo certo.
console.log(soma(3))

/* ----------------------------- */
/* FUNÇÃO DENTRO DE UMA VARIÁVEL */
/* ----------------------------- */
let v = function(x) {
    return x*2
}

console.log(v(5))

/* ---------------------- */
/* FUNÇÃO FATORIAL NORMAL */
/* ---------------------- */
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/* ------------------------- */
/* FUNÇÃO FATORIAL RECURSIVA */
/* ------------------------- */

function fatorial_2(n) {
    if (n==1) {
        return 1
    } else {
        return n*fatorial_2(n-1)
    }
} 

console.log(fatorial_2(5))