/*
let numero1 = Number(prompt("Ingrese el primer numero"))
let numero2 = Number(prompt("Ingrese el segundo numero"))
let resultado = numero1 + numero2
let textoSpan = document.getElementById('resultado')
textoSpan.innerText = `El resultado de sumar ${numero1} y ${numero2} es ${resultado}`
*/
/*
let user_info = {
    nombre: 'Rebeca Gimenez',
    avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5JHB681-ee3105d846cc-512',
    mail: 'gimenezlara834@gmail.com',
    ultima_conexion: '20:30 (hora local)'
}

const user_info_HTML = document.getElementById('user_info')
user_info_HTML.innerHTML = `
    <div>
        <img src='${user_info.avatar}'>
        <h2>${user_info.nombre}</h2>
    </div>
    <div>
        <span>Email: ${user_info.mail}</span>
        <span>Ultima conexion: ${user_info.ultima_conexion}</span>
    </div>
    `
*/
/*

const productsContainerHTML = document.getElementById('products-container')
const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 40
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2
    }
]

let resultado = ''

for(const producto of productos) {
    resultado += `
    <div>
        <h2>${producto.nombre}</h2>
        <span>$${producto.precio}</span><br>
        <span>Unidades disponibles: ${producto.stock}</span>
        <button>Comprar</button>
        <hr>
    </div>
    `
}

productsContainerHTML.innerHTML = resultado
*/
const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 40,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 0,
        comprado: false
    }
]

const productsContainerHTML = document.getElementById('products-container')

/* 
Por cada producto del array de productos deberar crear un div y deberas guardarlo/acumularlo en el resultado
*/

let resultado = ''

for(const producto of productos ){
    /* 
    Si producto esta comprado, entonces debera decir comprado en vez de comprar el boton. Caso contrario, siguira mostrando comprar
    Si el stock es 0 decir 'Ya no quedan unidades disponibles'
    Si es mayor a 0 decir 'Unidades disponibles: 0'
    */
   let hayStock = producto.stock > 0

    resultado = resultado + `
    <div>
        <h2>${producto.nombre}</h2>
        <span>Precio: $${producto.precio}</span><br>
        ${
            hayStock
            ? `<span>Unidades disponibles: ${producto.stock}</span>`
            : '<span>Ya no quedan unidades disponibles</span>'
        }
        ${
            producto.comprado 
            ? 'Comprado'
            : '<button>Comprar</button>'
        }
        <hr>
    </div>
    `
}

productsContainerHTML.innerHTML = resultado