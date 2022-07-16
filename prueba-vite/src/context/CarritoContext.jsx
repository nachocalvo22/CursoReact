import React from 'react'
import {context, useState } from 'react'

export const CartContext = React.createContext()

export const CarritoContext = ({children}) => {

    const [cart,setCart] = useState([])
    console.log(cart);
    const agregarCarrito = (item) =>{
        cart.push(item)
    }
    const quitarCarrito = (id) =>{
        setCart(cart.filter((item) => item.id !== id))
    }
   
    const vaciarCarrito = () => {
        setCart ([])
    }   

    
    return (
        <div>
            <CartContext.Provider value={[cart, agregarCarrito,vaciarCarrito,quitarCarrito]}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

