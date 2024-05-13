import { useState } from 'react'
import NavBar from './Componets/NavBar'
import Service from './Screens/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Service />
    </div>
  )
}

export default App
