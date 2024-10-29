/*
Crear una funcion llamada crearProducto
la funcion recibira titulo, precio y categoria del producto
INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
La funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola
*/


function crearProducto(titulo, precio, categoria) {
    let producto = {
        'titulo': titulo,
        'precio': precio,
        'categoria': categoria,
        'stock': 0,
        'estado': false
    }
    return producto
}
let producto = crearProducto("nombre",20,"categoria 1")
//console.log(ejemplo)


/*
EJERCICIO 2:
Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato
`
<div>
    <h3>producto.nombre</h3>
    <span><b>Precio:</b>$producto.precio</span>
    <span><b>Categoria:</b>producto.categoria</span>
</div>
`
Luego dicho string debera pasarse a la funcion document.write()
Ejemplo:
let HTML = `<div></div>`
document.write(HTML)
*/
function mostrarProducto(producto) {
    let html = `<div>
    <h3>producto.nombre</h3>
    <span><b>Precio:</b>${producto.precio}</span>
    <span><b>Categoria:</b>${producto.categoria}</span>
    </div>
    `
    document.write(html)
}
mostrarProducto(producto)
