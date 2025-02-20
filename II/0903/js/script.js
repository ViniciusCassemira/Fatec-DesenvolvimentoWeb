let botaoCalcular = document.getElementById("calcularMedia")
let botaoLimpar = document.getElementById("limparForm")
let mediaSpan = document.getElementById("mediaSpan")
let frequenciaSpan = document.getElementById("frequenciaSpan")
let resultadoSpan = document.getElementById('resultadoSpan')

botaoCalcular.addEventListener('click', calcularMedia)
botaoLimpar.addEventListener('click',limparForm)

function calcularMedia(){
    let a1 = parseFloat(document.getElementById("avaliacao1").value)
    let a2 = parseFloat(document.getElementById("avaliacao2").value)
    let p1 = parseFloat(document.getElementById("projeto1").value)
    let p2 = parseFloat(document.getElementById("projeto2").value)
    let pd = parseFloat(document.getElementById("pdiaria").value)
    let faltas = parseInt(document.getElementById('faltas').value)

    if(isNaN(a1)){a1 = 0}
    if(isNaN(a2)){a2 = 0}
    if(isNaN(p1)){p1 = 0}
    if(isNaN(p2)){p2 = 0}
    if(isNaN(pd)){pd = 0}
    if(isNaN(faltas)){faltas = 0}

    const peso1 = 0.15
    const peso2 = 0.2
    const peso3 = 0.3
    const totalAulas = 80
    let frequencia = 100 - ((faltas / totalAulas).toFixed(2)*100)

    let media = (a1*peso1)+(a2*peso1)+(p1*peso2)+(p2*peso2)+(pd*peso3)
    media = media.toFixed(2)

    let resultadoFinal = (media >= 6) && (frequencia >= 75) ?"Aprovado" :"Reprovado";

    mediaSpan.innerText = media
    frequenciaSpan.innerText = frequencia+"%"
    resultadoSpan.innerText = resultadoFinal
}

function limparForm(){
    let form = document.getElementById('media') 
    mediaSpan.innerText = ''
    resultadoSpan.innerText = ''
    frequenciaSpan.innerText =''
    form.reset()
    cursorFocus()
}

function cursorFocus(){
    document.getElementById('avaliacao1').focus()
}
