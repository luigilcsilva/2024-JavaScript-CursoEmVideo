//let num = document.querySelector('input#fnum')
let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

/*
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
*/

function check_num(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function check_in_list(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num_val = Number(num.value)
    if (check_num(num_val) && !check_in_list(num_val, valores)) {
        valores.push(num_val) //Adiciona o valor ao array valores.
        let item = document.createElement('option') //Cria um option para a lista.
        item.text = `Valor ${num_val} adicionado.` //Modifica o texto do option.
        lista.appendChild(item) //Adiciona o option à lista.
        res.innerHTML = '' //Limpa a div de resultados ao adicionar número.
    } else {
        window.alert('Valor inválido ou já pertence à lista.')
    }
    num.value = '' //Zera a caixa de números.
    num.focus() //Coloca o "cursor" de digitação de volta lá na caixa númerica.
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let quantity_of_num = valores.length
        let soma = 0

        for(let pos in valores) {
            soma += valores[pos]
        }

        media = soma / quantity_of_num

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${quantity_of_num} números cadastrados.</p>`
        res.innerHTML += `<p>O valor máximo é ${Math.max(...valores)}.</p>`
        res.innerHTML += `<p>O valor mínimo é ${Math.min(...valores)}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
}
