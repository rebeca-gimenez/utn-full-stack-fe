import React, { useState } from 'react'
import extractFormData from '../helpers/extractFormData'


const FormScreen = () => {
    const [users, setUsers] = useState([])

    const [errors, setErrors] = useState({name: null, password: null})

    const handleSubmitUncontrolledForm = (event) => {
        event.preventDefault()

        const form_jsx = event.target

        const new_user = extractFormData(form_jsx)

        let hayErrores = false

        if(!new_user.name){
            setErrors(( prevStateErrors )=> {
                return {...prevStateErrors, name: 'Falta un nombre'}
            })
            hayErrores = true
        }
        if(!new_user.password){
            setErrors((prevStateErrors) => {
                return {...prevStateErrors, password: 'Falta una contrasenia'}
            })
            hayErrores = true
        }


        if(!hayErrores){
            setErrors({name: null, password: null})
            new_user.hora_creacion = getFormattedDateMMHHDDMM()

            //Clonar const estado2 = [...estado]
            //const users2 = [...users]
            //users2.push(new_user)
            //Mejor que lo anterior, pero no la mejor practica
            setUsers([...users, new_user])
        
            console.log('formulario enviado')
        }
    }
    return (
        <div>
            <h1>Formularios en React</h1>
            <form onSubmit={handleSubmitUncontrolledForm}>
                <label htmlFor="name">Ingrese su nombre</label>
                <input type="name" id="name" name='name'/>
                {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                <label htmlFor="password">Ingrese su password</label>
                <input type="password" id="password" name='password'/>
                {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
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