//MUITOS PROBLEMAS COM OPERAÇÕES MULTIPLAS



var telaNum = document.getElementById('num')
var numTela = Number(telaNum)
var numeros = []
var r1 = document.getElementById('resultado')
var i = 0
var s = 0
var operador = ''
var t1 = document.getElementById('total')

//pega o número digitado
function digito(n){
    telaNum.value += `${Number(n)}`
    
}
//pega o número digitado

//operações a partir dos butões
function soma(){
    numeros.push(telaNum.value)
    telaNum.value = ''
    operador = 1
    i = numeros.length
    while(i <= numeros.length){
        if(i==1){
        r1.innerHTML += `${numeros[i-1]}`  
        i++
        } else {
            r1.innerHTML +='+' 
            r1.innerHTML += `${numeros[i-1]}` 
            i++
        }
    }
    i = 0
}

function sub(){
    numeros.push(telaNum.value)
    telaNum.value = ''
    operador = 2
    i = numeros.length
    while(i <= numeros.length){
        if(i==1){
        r1.innerHTML += `${numeros[i-1]}` 
        i++
        } else {
            r1.innerHTML +='-'
            r1.innerHTML += `${numeros[i-1]}`
            i++
        }
    }
    i = 0
}

function div(){
    numeros.push(telaNum.value)
    telaNum.value = ''
    operador = 3
    i = numeros.length
    while(i <= numeros.length){
        if(i==1){
        r1.innerHTML += `${numeros[i-1]}` 
        i++
        } else {
            r1.innerHTML +='/' 
            r1.innerHTML += `${numeros[i-1]}`
            i++
        }
    }
    i = 0
}

function mult(){
    numeros.push(telaNum.value)
    telaNum.value = ''
    operador = 4
    i = numeros.length
    while(i <= numeros.length){
        if(i==1){
        r1.innerHTML += `${numeros[i-1]}`
        i++
        } else {
            r1.innerHTML +='*'
            r1.innerHTML += `${numeros[i-1]}` 
            i++
        }
    }
    i = 0
}
//operações a partir dos butões

//resultado, realiza a operação
function resultado(){
    
    switch(operador){
        
        case 1:
            //i = 0
            while(i < numeros.length){
    
            s += Number(numeros[i])

            i++
            }
            
        break
        case 2:
            //i = 0
            while(i < numeros.length){
                if(s == 0){
                    s = Number(numeros[i])
                } else{
                    s -= Number(numeros[i])
                }
            i++
            }
            
        break
        case 3:
            i = numeros.length - 1
            while(i < numeros.length){
                if(i == 0){
                    s = Number(numeros[i])
                } else{
                    s = s / Number(numeros[i])
                }
            i++
            } 
        break 
        case 4:
           // i = 0
            while(i < numeros.length){
                if(i == 0){
                    s = Number(numeros[i])
                } else{
                    s *= Number(numeros[i])
                }
            i++
            } 
        break 
    }
    t1.innerHTML = `O resultado da sua operação é ${s.toFixed(2)}`
    //s = 0
}
//resultado, realiza a operação

//reseta a página
function reset(){
    location.reload()
}
//reseta a página