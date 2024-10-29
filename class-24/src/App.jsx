import React from 'react'
import './global.css'

function App() {
  function saludarPersona({nombre, edad}){
    console.log(`FUNCION Hola me llamo ${nombre} y tengo ${edad} años`)
  }
  let persona_x = {nombre: 'juan', edad: 48, apellido: 'suarez'}
  saludarPersona({nombre: 'juan',edad: 48})
  return (
    <div>
      <h1>Your cards</h1>
      <CashCard
      nombre={'Christian vizcarria'}
      saldo={15872}
      logo_tarjeta={'MC'}
      numero={'4209123412340210'}
      />
      <CashCard
      nombre={'Christian vizcarria'}
      saldo={98581}
      logo_tarjeta={'MC'}
      numero={'4209123412340210'}
      />
      <CashCard
      nombre={'Christian vizcarria'}
      saldo={45786}
      logo_tarjeta={'Visa'}
      numero={'4209123412340210'}
      />
    </div>
  )
}

const NavBar = (props) => {
  console.log(props)
  return (
    <header style={
      {backgroundColor: 'red'}
    }>
      <h2>{props.title}</h2>
      <nav>
        <a href=""> Home</a>
        <a href=""> About</a>
        <a href=""> Contact</a>
      </nav>
    </header>
  )
}

const CardsContainer = () => {}
const CashCard = ({nombre, numero, saldo, logo_tarjeta}) => {
  return (
    <div className='debit-card'>
      <div className='card-component'>
        <span>${saldo}</span>
        <span>{logo_tarjeta}</span>
      </div>
      <div className='card-component'>
        <div className='card-info'>
          <span>{numero.substring(0,4)} **** **** {numero.substring(11,15)}</span>
          <span>{nombre.toUpperCase()}</span>
        </div>
        <button>...</button>
      </div>
    </div>
  )
}
export default App
