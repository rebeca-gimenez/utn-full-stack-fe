import React, { useState } from 'react'

const StateScreen = () => {
    //const contador_state = useState(1)
    const [contador, setContador] = useState(1)

    const incrementar = () => {
        //contador_state[1](contador_state[0]+1)
        setContador(
            (prevContadorState) => {
                return prevContadorState + 1
            }
        )
        setContador(
            (prevContadorState) => {
                return prevContadorState + 1
            }
        )
        setContador(
            (prevContadorState) => {
                return prevContadorState + 1
            }
        )
        setErrorMinimoContador(false) 
    }
    const decrementar = () => {
        //contador_state[1](contador_state[0]-1)
        //Bad practice
        setContador(contador - 1)
    }

    const handleShowHiddenText = () => {
        setIsHiddenText(!isHiddenText)
    }
    const [isHiddenText, setIsHiddenText] = useState(true)
    const [errorMinimoContador, setErrorMinimoContador] = useState(false)

    const handleDecrementarError = () => {
        //contador_state[1](contador_state[0]-1)
        contador === 1 ? setErrorMinimoContador(true) : setContador(contador - 1)
    }
    const handleIncrementarError = () => {
        //contador_state[1](contador_state[0]+1)
        setContador(contador + 1)
        setErrorMinimoContador(false) 
    }
    return (
    <div>
        <h1>Estados en React</h1>
        <div>
            <h2>Ejemplo 1</h2>
            <button onClick={decrementar}>Restar</button>
            <span>{contador}</span>
            <button onClick={incrementar}>Sumar</button>
        </div>
        <div>
            <h2>Ejemplo 2</h2>
            <button onClick={handleShowHiddenText}>Abrir</button>
            {
            !isHiddenText && <span>Texto Oculto</span>
            }
            {/*<span hidden={isHiddenText}>Texto Oculto</span>*/}
        </div>
        <div>
            <h2>Tarea</h2>
            <button onClick={handleDecrementarError}>Restar</button>
            <span>{contador}</span>
            <button onClick={handleIncrementarError}>Sumar</button>
            {
            errorMinimoContador && <span>El estado no puede ser negativo</span>
            }
            {/*<span hidden={isHiddenText}>Texto Oculto</span>*/}
        </div>
        
    </div>
    )
    }

export default StateScreen