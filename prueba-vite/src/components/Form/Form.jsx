import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { Fragment, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CarritoContext'

const Form = () => {
  const {cart, emptyCart,finalPrice} = useContext(CartContext)

  const [datos,setDatos] = useState({
    name: '',
    lastName: '',
    mail: '',
    validateMail: ''
  })
  


  const handleInputChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name]   : event.target.value
    })
  }




  const [id, setId] = useState()
  const generateOrder = async ()=> {
    const order = {}
    order.buyer = {
      name: datos.nombre,
      lastName: datos.apellido,
      email: datos.mail,
      validateMail: datos.validateMail
    }
    order.items = cart.map(prod =>{
      const id = prod.item.id
      const price = prod.item.precio
      const title = prod.item.nombre 
      const quantity = prod.quantity
      return {id,price,title,quantity}

    })
    order.total = finalPrice()
    console.log(order);

//Insertar una Orden
    const db = getFirestore()
    const queryInsertarCollection = collection(db,'orders')
    addDoc(queryInsertarCollection,order)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
   .finally(()=> emptyCart())  
  }
  return(
    <div>
        <h2>Coloque sus datos:</h2>
        <form className='row'>
        <div className='col md-5'>
            <input
              name='nombre'
              placeholder='Ingrese su nombre'
              className='form-control'
              onChange={handleInputChange}
            />
        </div>
        
        <div className='col md-5'>
            <input
              name='apellido'
              placeholder='Ingrese su apellido'
              className='form-control'
              type='text'
              onChange={handleInputChange}
            />
        </div>

        <div className='col md-5'>
            <input
              name='mail'
              placeholder='Ingrese su mail'
              className='form-control'
              type='mail'
              onChange={handleInputChange}
            />
        </div>

        <div className='col md-5'>
            <input
              name='validateMail'
              placeholder='Repita su mail'
              className='form-control'
              type='mail'
              onChange={handleInputChange}
            />
        </div>

        <div className='col md-5'>
        <Button variant="primary" onClick={generateOrder}>Orden</Button>
        </div>
        </form>

         <div>
         {id && <div> {datos.nombre} su   el id de su producto es: {id}</div>}
         </div>
    </div>

)
}


export default Form