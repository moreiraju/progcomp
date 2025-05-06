function exe0(){
    let nota //guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ //conta recebe conta +1
    }
    let media = soma/6
    alert(`A média das notas é ${media.toFixed(1)}`)

    /*
    let nota1 = Number(prompt('Informe a nota 1: '))
    let nota2 = Number(prompt('Informe a nota 2: '))
    let nota3 = Number(prompt('Informe a nota 3: '))
    let nota4 = Number(prompt('Informe a nota 4: '))
    let nota5 = Number(prompt('Informe a nota 5: '))
    let nota6 = Number(prompt('Informe a nota 6: '))

    let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma/6

    // Mostra o resultado*/
}
function pesquisaSatisfacao(){
    let nota
    let conta = 1
    let pessoaS = 0
    let pessoaI = 0
    let media = 0
    let soma = 0
    while(conta<=10){
        nota = Number(prompt(`${conta}. De uma nota de satisfação entre 0 à 10:`))
        soma = soma + nota
        conta++
        if(nota>=8){
            pessoaS++
        } else if(nota<5){
            pessoaI++
        }
    }
    media = soma / 10
    alert(`A média das notas é ${media}, o total de pessoas satisfeitas é ${pessoaS} e o total de pessoas insatisfeitas é ${pessoaI}.`)
}