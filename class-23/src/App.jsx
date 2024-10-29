import React from 'react'

function App() {
  let status = 'closed'
  let buttonText = 'Close'

  let space = 10
  let maxSpace = 9


  return (
    <div className='box'> 
      {
        maxSpace === space
        ? <span>Maximum space consumed</span>
        : maxSpace - 2 <= space
        ? <span>Space close to running out</span>
        : <span></span>
      }<a href="">Improve plan</a>
      <p>Status Server: {status}</p>
      {
        status == 'opened'
        ? <button>Close</button>
        : <button>Open</button>
      }
      
    </div>
  )
}

export default App
