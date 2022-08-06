import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Cart from './components/containers/Cart/Cart';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { CarritoContext } from './context/CarritoContext';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form';



function App() {


  return (
    <CarritoContext>
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer  />}/>
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer  />}/>
          <Route path='/detalle/:detailsId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<Navigate to='/'/>} />
          <Route path='/form' element={<Form/>} />  
        </Routes>
      </div>
    </BrowserRouter>
    </CarritoContext>


  )
}

export default App
