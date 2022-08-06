import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../../context/CarritoContext'

const CartItems = ({product}) => {
  const {quitarCarrito} = useContext(CartContext)





  return (
    <div>
                          { <img src={product.item.img} alt='Foto producto' className="w-25"/> }
                          <span>- Nombre: {product.item.nombre}</span>
                          <span>- Precio:{product.item.precio}</span>
                           <span>- Cantidad: {product.quantity}</span>
                           <Button variant="primary" onClick={()=> quitarCarrito(product.item.id)}>X</Button>
    </div>
  )
}

export default CartItems