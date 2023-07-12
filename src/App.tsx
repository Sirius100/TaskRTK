import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ButtonGetTask from './components/btn_get_task/btnGetTask'
import ListTask from './components/list/list'
function App() {

  return (

      <div className="card">
        <ListTask/>
        <ButtonGetTask/>
      </div>

  )
}

export default App
