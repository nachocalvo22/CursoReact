import React, { useContext } from 'react'
import { CartContext } from '../../../context/CarritoContext'


const CartItems = ({items}) => {
    const [cart, agregarCarrito,vaciarCarrito,quitarCarrito,traerCarrito,precioFinal] = useContext(CartContext)




  return (
    <div>CartItems</div>
  )
}

export default CartItems