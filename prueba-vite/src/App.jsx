import { useState } from 'react'

import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Formulario from './components/Formulario/Formulario';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar />
    <Formulario />
    <ItemListContainer  />

    </div>

  )
}

export default App
