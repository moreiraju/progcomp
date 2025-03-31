function calcular(){
    let soma = 0
    //recupera o valor da acao social digitado
    //declarar uma variavel sem tipo pq js nao é tipado
    let acaoSocial = document.getElementById("acaoSocial").value 
    soma = soma + Number(acaoSocial)

    //recupera o valor digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)

    //recupera o valor digitado
    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))

    //recupera o valor digitado kitAlimentacao
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    
    //recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    let pontosKit = 0 //guarda a pontuacao por kit
    if (equipe == "Laranja"){
        // equipe Laranja
        if(kitAlimentacao >= 97){
            pontosKit = 5000 + ((kitAlimentacao - 97) * 30)
        }
        else if(kitAlimentacao >= 78){
            pontosKit = 400 + ((kitAlimentacao - 78) * 30)
        }
        else if(kitAlimentacao >= 49){
            pontosKit = 2500 + ((kitAlimentacao - 49) * 30)
        }
        else if(kitAlimentacao >= 19){
            pontosKit = 1000 + ((kitAlimentacao - 19) * 30)
        }
        else{
            pontosKit= soma + (kitAlimentacao * 30)
        }
    }
    if (equipe == "Preta"){
        // equipe Laranja
        if(kitAlimentacao >= 103){
            pontosKit = 5000 + ((kitAlimentacao - 103) * 30)
        }
        else if(kitAlimentacao >= 82){
            pontosKit = 400 + ((kitAlimentacao - 82) * 30)
        }
        else if(kitAlimentacao >= 52){
            pontosKit = 2500 + ((kitAlimentacao - 52) * 30)
        }
        else if(kitAlimentacao >= 21){
            pontosKit = 1000 + ((kitAlimentacao - 21) * 30)
        }
        else{
            pontosKit= soma + (kitAlimentacao * 30)
        }
    }
    if (equipe == "Roxa"){
        // equipe Laranja
        if(kitAlimentacao >= 102){
            pontosKit = 5000 + ((kitAlimentacao - 102) * 30)
        }
        else if(kitAlimentacao >= 82){
            pontosKit = 400 + ((kitAlimentacao - 82) * 30)
        }
        else if(kitAlimentacao >= 51){
            pontosKit = 2500 + ((kitAlimentacao - 51) * 30)
        }
        else if(kitAlimentacao >= 20){
            pontosKit = 1000 + ((kitAlimentacao - 20) * 30)
        }
        else{
            pontosKit= soma + (kitAlimentacao * 30)
        }
    }
    if (equipe == "Verde"){
        // equipe Laranja
        if(kitAlimentacao >= 88){
            pontosKit = 5000 + ((kitAlimentacao - 88) * 30)
        }
        else if(kitAlimentacao >= 70){
            pontosKit = 400 + ((kitAlimentacao - 70) * 30)
        }
        else if(kitAlimentacao >= 44){
            pontosKit = 2500 + ((kitAlimentacao - 44) * 30)
        }
        else if(kitAlimentacao >= 18){
            pontosKit = 1000 + ((kitAlimentacao - 18) * 30)
        }
        else{
            pontosKit= soma + (kitAlimentacao * 30)
        }
    }
    if (equipe == "Vermelha"){
        // equipe Laranja
        if(kitAlimentacao >= 93){
            pontosKit = 5000 + ((kitAlimentacao - 93) * 30)
        }
        else if(kitAlimentacao >= 74){
            pontosKit = 400 + ((kitAlimentacao - 74) * 30)
        }
        else if(kitAlimentacao >= 47){
            pontosKit = 2500 + ((kitAlimentacao - 47) * 30)
        }
        else if(kitAlimentacao >= 19){
            pontosKit = 1000 + ((kitAlimentacao - 19) * 30)
        }
        else{
            pontosKit= soma + (kitAlimentacao * 30)
        }
    }
    soma = soma + pontosKit

    //recupera o valor digitado
    let suplemento = document.getElementById("suplemento").value
    soma = soma + (15 * Number(suplemento))

    //recupera o valor digitado
    let arroz = document.getElementById("arroz").value
    soma = soma + (5 * Number(arroz))

    //recupera o valor digitado
    let arroz1 = document.getElementById("arroz1").value
    soma = soma + Number(arroz1)

    //recupera o valor digitado
    let feijao2 = document.getElementById("feijao2").value
    soma = soma + ( 2 * Number(feijao2))

    //recupera o valor digitado
    let feijao1 = document.getElementById("feijao1").value
    soma = soma + Number(feijao1)

    //recupera o valor digitado
    let macarrao = document.getElementById("macarrao").value
    soma = soma + ( 0.5 * Number(macarrao))

    //recupera o valor digitado
    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}