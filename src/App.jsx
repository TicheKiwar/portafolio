import { useState } from 'react'
import NavBar from './Componets/NavBar'
import Card from './Componets/Card'
import Service from './Screens/Service'
import Contact from './Screens/Contact'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <NavBar />
      <Service />
      <Card />
      <Contact />
    </div>
  )
}

export default App
