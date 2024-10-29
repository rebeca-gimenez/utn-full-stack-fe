const textoOcultoHTML = document.getElementById('texto-oculto')
const btnMostrarHTML = document.getElementById('btn-mostrar')

function mostrarTexto (){
    textoOcultoHTML.classList.toggle('hidden')
}

btnMostrarHTML.addEventListener('click', mostrarTexto)