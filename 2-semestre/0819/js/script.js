function juntarNome(){
    let nome = document.getElementById("nome").value;
    let sobreNome = document.getElementById("sobreNome").value;
    let nomeCompleto = nome + " " + sobreNome;
    document.getElementById("nomeCompleto").innerHTML = "<strong>" + nomeCompleto + "</strong>";
    mostrarLog(nome,sobreNome,nomeCompleto)
    mostrarAlert(nome,sobreNome,nomeCompleto)
}

function limparForm(){
    // document.getElementById("nome").value = ""; -- jeito de limpar o forms
    // document.getElementById("sobreNome").value = ""; -- jeito de limpar o forms
    document.getElementById("form").reset();
    document.getElementById("nomeCompleto").innerHTML = "Vai aparecer aqui";
    focoCursor()
    console.clear();
}

function focoCursor(){
    document.getElementById("nome").focus(); /*Traz o cursor do mouse no input nome*/
}

function mostrarLog(n,s,nc){
    console.log("nome: " + n)
    console.log("sobrenome: " + s)
    console.log("nome completo: " + nc)
}

function outroHtml(arquivo){
    window.location.href = arquivo+'.html';
}

function mostrarAlert(n,s,nc){
    alert("Nome: " + n);
    alert("Sobrenome: " + s);
    alert("Nome completo: " + nc);
}