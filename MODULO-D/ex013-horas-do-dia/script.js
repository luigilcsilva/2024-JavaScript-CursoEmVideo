function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = "manha-round.png"
        document.body.style.background = '#ce9b6c'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE!
        img.src = "tarde-round.png"
        document.body.style.background = '#698f80'
        msg2.innerHTML = 'Boa tarde!'
    } else {
        // BOA NOITE!
        img.src = "noite-round.png"
        document.body.style.background = '#00326d'
        msg2.innerHTML = 'Boa noite!'
    }
}