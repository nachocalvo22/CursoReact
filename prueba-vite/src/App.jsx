import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Formulario from './components/Formulario/Formulario';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer  />}/>
          <Route path='/Form' element={<Formulario />}/>

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
