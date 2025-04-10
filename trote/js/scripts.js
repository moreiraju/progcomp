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
    //recupera o valor digitado
    let suplemento = Number(document.getElementById("suplemento").value)
    
    //recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    let pontosKitSupl = 0 //guarda a pontuacao por kit
    if (equipe == "Laranja"){
        // equipe Laranja
        if(kitAlimentacao >= 97 && suplemento >= 49){
            pontosKitSupl = 5000 + ((kitAlimentacao - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if(kitAlimentacao >= 78 && suplemento >= 39){
            pontosKitSupl = 400 + ((kitAlimentacao - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if(kitAlimentacao >= 49 && suplemento >= 25){
            pontosKitSupl = 2500 + ((kitAlimentacao - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if(kitAlimentacao >= 19 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kitAlimentacao - 19) * 30) + ((suplemento - 10) * 15)
        }
    }
    if (equipe == "Preta"){
        if(kitAlimentacao >= 103 && suplemento >= 52){
            pontosKitSupl = 5000 + ((kitAlimentacao - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if(kitAlimentacao >= 82 && suplemento >= 42){
            pontosKitSupl = 400 + ((kitAlimentacao - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if(kitAlimentacao >= 52 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kitAlimentacao - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if(kitAlimentacao >= 21 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kitAlimentacao - 21) * 30) + ((suplemento - 10) * 15)
        }
    }
    else if (equipe == "Roxa"){
        if(kitAlimentacao >= 102 && suplemento >= 51){
            pontosKitSupl = 5000 + ((kitAlimentacao - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if(kitAlimentacao >= 82 && suplemento >= 41){
            pontosKitSupl = 400 + ((kitAlimentacao - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if(kitAlimentacao >= 51 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kitAlimentacao - 51) * 30)+ ((suplemento - 26) * 15)
        }
        else if(kitAlimentacao >= 20 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kitAlimentacao - 20) * 30)+ ((suplemento - 10) * 15)
        }
    }
    else if (equipe == "Verde"){
        if(kitAlimentacao >= 88 && suplemento >= 44){
            pontosKitSupl = 5000 + ((kitAlimentacao - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if(kitAlimentacao >= 70 && suplemento >= 35){
            pontosKitSupl = 400 + ((kitAlimentacao - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if(kitAlimentacao >= 44 && suplemento >= 22){
            pontosKitSupl = 2500 + ((kitAlimentacao - 44) * 30) + ((suplemento - 22) * 15)
        }
        else if(kitAlimentacao >= 18 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kitAlimentacao - 18) * 30) + ((suplemento - 9) * 15)
        }
    }
    else {
        if(kitAlimentacao >= 93 && suplemento >= 47){
            pontosKitSupl = 5000 + ((kitAlimentacao - 93) * 30) + ((suplemento - 47) * 15)
        }
        else if(kitAlimentacao >= 74 && suplemento >= 38){
            pontosKitSupl = 400 + ((kitAlimentacao - 74) * 30) + ((suplemento - 38) * 15)
        }
        else if(kitAlimentacao >= 47 && suplemento >= 24){
            pontosKitSupl = 2500 + ((kitAlimentacao - 47) * 30) + ((suplemento - 24) * 15)
        }
        else if(kitAlimentacao >= 19 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kitAlimentacao - 19) * 30)+ ((suplemento - 9) * 15)
        }
    }
    soma = soma + pontosKitSupl

    let sangue = Number(document.getElementById("sangue").value)
    if (equipe == "Laranja"){
        if(sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else if(sangue < 49){
            soma = soma + (sangue * 20)
        }
    }
    else if(equipe == "Preta"){
        if(sangue >= 52){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else if(sangue < 52){
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Roxa"){
        if(sangue >= 51){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else if(sangue < 51){
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Verde"){
        if(sangue >= 44){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else if(sangue < 44){
            soma = soma + (sangue * 20)
        }
    }
    else{
        if(sangue >= 47){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else if(sangue < 47){
            soma = soma + (sangue * 20)
        }
    }


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

    let mascote = document.getElementById("mascote").value
    soma = soma + Number(mascote)

    let caracterizacao = document.getElementById("caracterizacao").value
    soma = soma + Number(caracterizacao)

    let audiovisual = document.getElementById("audiovisual").value
    soma = soma + Number(audiovisual)

    let atividades = document.getElementById("atividades").value
    soma = soma + Number(atividades)

    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)

    
}