function somar() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let soma = valor1 + valor2;
    document.getElementById("resultado").innerText = soma;
}

function subtrair(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let subtracao = valor1 - valor2;
    document.getElementById("resultado").innerText = subtracao;
}

function multiplicar(){
    let valor1 = parseFloat(document.getElementById("valor1").value)
    let valor2 = parseFloat(document.getElementById("valor2").value)
    let multiplicacao = valor1 * valor2;
    document.getElementById("resultado").innerText = multiplicacao.toFixed(2)
}

function dividir(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let divisao = valor1 / valor2;
    
    if(valor1 == 0){
        alert("Divisão por 0 não é possível")
        document.getElementById("valor1").value ="";
        document.getElementById("valor1").focus();
    }else if(valor2 == 0){
        alert("Divisão por 0 não é possível")
        document.getElementById("valor2").value ="";
        document.getElementById("valor2").focus();
    }else{
        document.getElementById("resultado").innerText = divisao.toFixed(2)
    }
}