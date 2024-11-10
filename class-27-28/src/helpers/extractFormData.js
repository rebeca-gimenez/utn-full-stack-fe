const extractFormData = (form_jsx) => {
    const form_data = new FormData(form_jsx)

    //Obtener valor de campo del form
    const nombre = form_data.get('nombre')

    //Lista de llaves
    const form_keys = form_data.keys().toArray()

    //Objeto con todos los valores del form
    const form_values = {}
    for (let key of form_keys){
        form_values[key] = form_data.get(key)
    }
    return form_values
}
export default extractFormData