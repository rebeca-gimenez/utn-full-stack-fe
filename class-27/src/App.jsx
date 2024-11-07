import React from 'react'
import {WorkspaceList} from './Components'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import StateScreen from './Screens/StateScreen'
import FormScreen from './Components/FormScreen'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
        <Route path='/estados' element={<StateScreen/>}/>
        <Route
        path='/formularios'
        element={<FormScreen/>}
        />
      </Routes>
    </div>
  )
}

export default App
