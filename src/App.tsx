import './App.css'

import ButtonGetTask from './components/btn_get_task/btnGetTask'
import ListTask from './components/list/list'
function App() {

  return (

      <div className="card">
        <ListTask/>

        <footer>
          <ButtonGetTask/>
        </footer>
        
      </div>

  )
}

export default App
