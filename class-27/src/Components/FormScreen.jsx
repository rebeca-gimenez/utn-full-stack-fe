import React, { useState } from 'react'
import extractFormData from '../helpers/extractFormData'


const FormScreen = () => {
    const [users, setUsers] = useState([])

    const handleSubmitUncontrolledForm = (event) => {
        event.preventDefault()
        const form_jsx = event.target
        const new_user = extractFormData(form_jsx)
        //Clonar const estado2 = [...estado]
        //const users2 = [...users]
        //users2.push(new_user)
        //Mejor que lo anterior, pero no la mejor practica
        setUsers([...users, new_user])
        console.log(users)
        console.log("Enviado")
    }
    return (
        <div>
            <h1>Formularios en React</h1>
            <form onSubmit={handleSubmitUncontrolledForm}>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="nombre" id="nombre" name='nombre'/>
                <label htmlFor="password">Ingrese su password</label>
                <input type="password" id="password" name='password'/>
                <button type='submit'>Confirmar</button>
            </form>
            <UsersList users={users}/>
        </div>
        )
}
const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return <UserCard nombre={user.nombre} contrasenia={user.contrasenia}/>
            })}
        </div>
    )
}
const UserCard = ({nombre, contrasenia}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Contrasenia: {contrasenia}</h2>
        </div>
    )
}

export default FormScreen