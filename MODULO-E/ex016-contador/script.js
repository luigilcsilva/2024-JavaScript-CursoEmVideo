function Contar() {
    var ini = window.document.getElementById('numinicio')
    var num_ini = Number(ini.value)
    var fim = window.document.querySelector('input#numfinal')
    var num_fim = Number(fim.value)
    var passo = window.document.getElementById('passo')
    var num_passo = Number(passo.value)
    var res = window.document.getElementById('res')
    
    if (passo.value.length == 0 || num_passo == 0) {
        num_passo = 1
        window.alert(`Passo inválido. Fazendo o passo igual a 1.`)
    } else if (num_passo < 0) {
        num_passo = Math.abs(num_passo)
        window.alert(`Passo negativo. Fazendo o passo igual ao módulo do inserido.`)
    }

    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('Selecione os números de início e fim.')
        res.innerHTML = ''
    } else if (num_ini > num_fim) {
        res.innerHTML = '<p>Fazendo uma contagem regressiva...</p>'
        for (var j = num_ini; j >= num_fim; j -= num_passo) {
            res.innerHTML += `&#128073 ${j}`
        }
        res.innerHTML += '&#128994'
    } else {
        res.innerHTML = '<p>Fazendo uma contagem progressiva...</p>'
        for (var j = num_ini; j <= num_fim; j += num_passo) {
            res.innerHTML += `&#128073 ${j}`
        }
        res.innerHTML += '&#128994'
    }

}