import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';

import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Formulario from './components/Formulario/Formulario';
import Cart from './components/containers/Cart/Cart';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>

          <Route index path='/' element={<ItemListContainer  />}/>
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer  />}/>
          <Route path='/detalle/:detailsId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
{/*           <Route path='*' element={<Navigate to='/'/>} />
 */}        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
