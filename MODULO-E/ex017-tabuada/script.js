function tabuada() {
    let inp_num = window.document.getElementById('txtn')
    let area_tab = window.document.getElementById('seltab')

    if (inp_num.value.length == 0) {
        window.alert('Por favor, digite um número.')
        area_tab.innerHTML = '<option>Digite um número acima</option>'
    } else {
        let num = Number(inp_num.value)
        let c = 1
        area_tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            area_tab.appendChild(item)
            c++
        }
    }
}