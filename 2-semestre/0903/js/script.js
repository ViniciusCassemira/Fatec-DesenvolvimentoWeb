let botaoCalcular = document.getElementById("calcularMedia")
let botaoLimpar = document.getElementById("limparForm")

botaoCalcular.addEventListener('click', calcularMedia)
botaoLimpar.addEventListener('click',limparForm)

function calcularMedia(){
    let a1 = parseFloat(document.getElementById("avaliacao1").value)
    let a2 = parseFloat(document.getElementById("avaliacao2").value)
    let p1 = parseFloat(document.getElementById("projeto1").value)
    let p2 = parseFloat(document.getElementById("projeto2").value)
    let pd = parseFloat(document.getElementById("pdiaria").value)

    if(isNaN(a1)){a1 = 0}
    if(isNaN(a2)){a2 = 0}
    if(isNaN(p1)){p1 = 0}
    if(isNaN(p2)){p2 = 0}
    if(isNaN(pd)){pd = 0}
    
    let media = (a1*0.15)+(a2*0.15)+(p1*0.2)+(p2*0.2)+(pd*0.3)
    media = media.toFixed(2)
    
    document.getElementById("mediaSpan").innerText = media
    document.getElementById('resultadoSpan').innerText = resultadoFinal(media)
}

function limparForm(){
    let form = document.getElementById('media')
    document.getElementById('mediaSpan').innerText = ''
    document.getElementById('resultadoSpan').innerText = ''
    form.reset()
    cursorFocus()
}

function cursorFocus(){
    document.getElementById('avaliacao1').focus()
}

function resultadoFinal(media){
    if(media >= 6){
        return "Você foi aprovado"
    }else{
        return "Você foi reprovado"
    }
}