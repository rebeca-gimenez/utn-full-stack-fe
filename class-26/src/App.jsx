import React from 'react'
import {WorkspaceList} from './Components'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Components/Screens/HomeScreen'
import WorkspaceScreen from './Components/Screens/WorkspaceScreen'
import StateScreen from './Components/Screens/StateScreen'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
        <Route path='/estados' element={<StateScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
