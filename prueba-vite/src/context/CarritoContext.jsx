import React from 'react'
import {useState } from 'react'

export const CartContext = React.createContext()

export const CarritoContext = ({children}) => {

    const [cart,setCart] = useState([])
    
    const saveLocalStorage = (key,value) => {
        localStorage.setItem(key,JSON.stringify(value))
    }

    const addItem = (product) =>{
        const indexProducto = cart.findIndex(prod => prod.item.id === product.item.id )
        

        if(indexProducto === -1){
            setCart([...cart,product])
            saveLocalStorage('cartList', [ ...cart, product]) 
        }
        else{
            const total = cart[indexProducto].cantidad
            cart[indexProducto].cantidad = total + product.quantity
            setCart([...cart])
            saveLocalStorage('cartList', [...cart])

        }
    }

    const emptyCart = () => {
        setCart ([])
    }   

    const finalPrice = () =>{
        return cart.reduce((precio, product)=> precio = precio + (product.item.precio*product.quantity), 0)
    }

    const totalQuantity = () =>{
        return cart.reduce((contador, producto) => contador += producto.quantity ,0 )
    }

    const quitarCarrito = (id) =>{
        setCart(cart.filter((prod) => prod.item.id !== id))
    }
   

/*     const traerCarrito = ()=> {
        const carrito = localStorage.getItem('carrito')
        if(carrito) {
            return JSON.parse(carrito)
        }else{
            return []
        }
    } */
    
    return (
        <div>
            <CartContext.Provider value={{cart, addItem,emptyCart,quitarCarrito,finalPrice,totalQuantity}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

