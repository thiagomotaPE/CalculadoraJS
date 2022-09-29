//function add (num){
   // document.getElementById('result').innerHTML = num
    //ao clicar em um numero, o parametro dentro de sua função
    //ia para a variavel 'num'.

    //o texto na variavel num foi colocado dentro do paragrafo 'result'


//}


function add (num){
    let numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

function clean (){
    document.getElementById('result').innerHTML = ''
}

function clean1 (){
    let resultado = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular () {
    let resultado = document.getElementById('result').innerHTML
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado)
    } else {
        alert('nada para calcular')
    }

}



















