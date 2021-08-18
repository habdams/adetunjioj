const code = document.querySelector('#showCode')
const design = document.querySelector('#showDesign')
const work = document.querySelector('#showWork')

document.querySelector('#code').addEventListener('click',showCode)
document.querySelector('#design').addEventListener('click',showDesign)
document.querySelector('#work').addEventListener('click', showWork)

function showCode(){
    code.classList.toggle('hidden')
    design.classList.add('hidden')
}

function showDesign(){
    code.classList.add('hidden')
    design.classList.toggle('hidden')
}

function showWork(){
    code.classList.remove('hidden')
    design.classList.remove('hidden')
}