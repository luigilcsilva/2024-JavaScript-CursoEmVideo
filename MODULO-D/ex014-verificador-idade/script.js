function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var fano = window.document.getElementById('txtano')
    var fmes = window.document.getElementById('txtmes')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fmes.value.length == 0 || Number(fano.value) > ano || 
        Number(fmes.value) > 12 || Number(fano.value) < 1900 || Number(fmes.value <1)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //Definindo a variável para conter a imagem.
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Pegando a opção de sexo que a pessoa escolheu e guardando.
        var fsex = document.getElementsByName('radsex')

        //Calculando a idade com meses e anos.
        var idade_mes = (mes+1) - Number(fmes.value)
        var idade_ano = ano - Number(fano.value)
        if (idade_mes < 0) {
            idade_mes = 12 - Math.abs(idade_mes)
            idade_ano -= 1
        }
        res.innerHTML = `Idade calculada: ${idade_ano} anos e ${idade_mes} meses.`

        //Atribuindo Homem e Mulher à variável gênero.
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade_ano >= 0 && idade_ano < 10) {
                //Criança.
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade_ano < 21) {
                //Jovem.
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade_ano < 50) {
                //Adulto.
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso.
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade_ano >= 0 && idade_ano < 10) {
                //Criança.
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade_ano < 21) {
                //Jovem.
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade_ano < 50) {
                //Adulto.
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso.
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        img.setAttribute('maxlength', 50);
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade_ano} anos e ${idade_mes} meses.`

        /* Definindo a altura e largura máxima */
        res.appendChild(img).style.maxWidth = "350px";
        res.appendChild(img).style.maxHeight = "350px";

        /* Inserindo a imagem */
        res.appendChild(img);
    }
}