let productos_vendidos_hoy = [
    'teclado',
    'monitor',
    'celular'
]
/* Por cada producto vendido deberas mostrar una alerta que diga 'Has vendido {producto} exitosamente 😎:sparkler::ghost:' */
/*
for(let pos = 0; pos < productos_vendidos_hoy.length; pos = pos + 1 ){
    alert(`Has vendido el producto ${productos_vendidos_hoy[pos]} exitosamente 😎`)
}

Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato
`<div>
    <h3>{nombre}</h3>
    <hr/>
</div>`
*/

let productos = [
    {
        titulo: 'tv samsung 32"',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 42"',
        precio: 600000,
        id: 2,
        descripcion: 'Es una tv normal pero mas grande, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 50"',
        precio: 800000,
        id: 3,
        descripcion: 'Es una tv normal pero mucho mas grande, no hay mucho que decir.'
    }
]
for(producto of productos){
    let html = `<p>H</p>`
    //producto.titulo
    //producto.precio
    document.write(html)
}