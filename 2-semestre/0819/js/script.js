function juntarNome(){
    let nome = document.getElementById("nome").value;
    let sobreNome = document.getElementById("sobreNome").value;
    let nomeCompleto = nome + " " + sobreNome;
    document.getElementById("nomeCompleto").innerHTML = "<strong>" + nomeCompleto + "</strong>";
}

function limparNome(){
    document.getElementById("nome").value = "";
    document.getElementById("sobreNome").value = "";
    document.getElementById("nomeCompleto").innerHTML = "";
    // document.getElementById("form").reset();  -- podemos usar esse tmb
}