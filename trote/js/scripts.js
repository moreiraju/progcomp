function calcular(){
    //recupera o valor da acao social digitado
    //declarar uma variavel sem tipo pq js nao é tipado
    let acaoSocial = document.getElementById("acaoSocial").value 
    //recupera o valor digitado
    let homenagem = document.getElementById("homenagem").value
    // vamos somar os valor
    let soma = Number(acaoSocial) + Number(homenagem)
    alert(soma)
}