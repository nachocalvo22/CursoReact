import { useState } from 'react'

import ComponenteClase  from './components/containers/ComponenteClase'
import NavBar from './components/navBar/NavBar';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar />
    <ItemListContainer saludo={'River Vos sos mi vidaaa'} />
    </div>

  )
}

export default App
