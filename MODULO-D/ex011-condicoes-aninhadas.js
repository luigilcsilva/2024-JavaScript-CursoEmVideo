var idade = 14
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não pode votar.')
} else if (idade < 18 || idade > 65){
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
} 

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}.`)