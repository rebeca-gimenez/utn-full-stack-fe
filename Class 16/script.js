let propiedadNueva = prompt('Ingresa la propiedad')
let valorNuevo = prompt('Ingresa el valor')
// Literal Object
let user = {
    'name': 'pepe',
    'lastName': 'suarez',
    'age': 19,
    'isClient': false,
    'address': {
        'country': 'AR',
        'province': 'Buenos Aires'
    },
    [propiedadNueva]: valorNuevo
}

console.log(user['name'])

let producto = {
    'titulo': 'un titulo',
    'precio': 1,
    'id': '0001',
    'stock': 20,
    'vendedor': {
        'nombre': 'compumundo',
        'id': 1
    }
}

let propiedadAMostrar = prompt('Ingresa la propiedad')
alert(producto[propiedadAMostrar])
console.log(producto['vendedor']['nombre'])
console.log(producto.vendedor.nombre)

let mensaje = {
    'texto': '',
    'autor': 'Maxi',
    'hora': '22:10',
    'url_avatar': 'direccion de la imagen',
    'id': 1
}

function presentarUsuario (usuario){
    console.log(`Hola me llamo ${user.name} ${user.address}`)
}