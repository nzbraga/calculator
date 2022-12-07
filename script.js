const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const btnSoma = document.querySelector("#btn-soma");
const btnSub = document.querySelector("#btn-sub");
const btnMult = document.querySelector("#btn-mult");
const btnDivi = document.querySelector("#btn-divi");
const btnClear = document.querySelector("#btn-clear");
const btnRes = document.querySelector("#btn-res");

const resList = document.querySelector('#list-res')
const oldRes = document.querySelector('.old-res')




num1.focus()

//

btnSoma.addEventListener('click', (e) =>{
    e.preventDefault()

    let v1 = parseFloat(num1.value)
    let v2 = parseFloat(num2.value)
    
    resultado = v1 + v2
})
btnSub.addEventListener('click', (e) =>{
    e.preventDefault()

    let v1 = parseFloat(num1.value)
    let v2 = parseFloat(num2.value)
    
    resultado = v1 - v2
})
btnMult.addEventListener('click', (e) =>{
    e.preventDefault()

    let v1 = parseFloat(num1.value)
    let v2 = parseFloat(num2.value)
   
    resultado = v1 * v2
})
btnDivi.addEventListener('click', (e) =>{
    e.preventDefault()

    let v1 = parseFloat(num1.value)
    let v2 = parseFloat(num2.value)

    
    resultado = v1 / v2

})
btnRes.addEventListener('click', (e) =>{
    e.preventDefault()

    let oldRes = document.createElement('p')
    oldRes.classList.add('old-res')
    oldRes.appendChild(document.createTextNode(resultado))
    
    
    resList.appendChild(oldRes)
   
    num1.value = ""
    num2.value = ""
    resultado = ""
    num1.focus()  
})

btnClear.addEventListener('click', (e) =>{
    e.preventDefault()

    let p = document.querySelector('.old-res')
    resList.removeChild(p)
    
})

