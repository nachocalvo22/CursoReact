import React from 'react'
import {context, useState } from 'react'

export const CartContext = React.createContext()

export const CarritoContext = ({children}) => {

    const [cart,setCart] = useState([])
    console.log(cart);


    const agregarProducto = (product) =>{
        const indexProducto = cart.findIndex(prod => prod.item.id === product.item.id )
        console.log(indexProducto)
        console.log(product)
        if(indexProducto === -1){
            setCart([...cart,product])
            localStorage.setItem('cartList',JSON.stringify([ ...cart, product]))
            guardarLocalStorage('cartList', [ ...cart, product]) 
        }
        else{
            const total = cart[indexProducto].cantidad
            cart[indexProducto].cantidad = total + product.cantidad
            setCart([...cart])
            localStorage.setItem('cartList', JSON.stringify([...cart]))  
            guardarLocalStorage('cartList', [...cart])

        }
    }

    const vaciarCarrito = () => {
        setCart ([])
    }   

    const precioFinal = () =>{
        console.log(cart);
        return cart.reduce((precio, product)=> precio = precio + (product.item.precio*product.cantidad), 0)
    }

    const cantidadTotal = () =>{
        return cart.reduce((contador, producto) => contador += producto.cantidad ,0 )
    }

    const quitarCarrito = (id) =>{
        setCart(cart.filter((prod) => prod.item.id !== id))
    }
   

    const traerCarrito = ()=> {
        const carrito = localStorage.getItem('carrito')
        if(carrito) {
            return JSON.parse(carrito)
        }else{
            return []
        }
    }
    
    return (
        <div>
            <CartContext.Provider value={{cart, agregarProducto,vaciarCarrito,quitarCarrito,traerCarrito,precioFinal,cantidadTotal}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

