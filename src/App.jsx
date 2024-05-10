import { useState } from 'react'
import NavBar from './Componets/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      
    </div>
  )
}

export default App
