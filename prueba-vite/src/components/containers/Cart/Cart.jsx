import { useContext, useState } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CarritoContext"
import CartItems from "./CartItems";


const Cart = () => {

  const {cart, emptyCart,quitarCarrito,finalPrice} = useContext(CartContext)

console.log(cart);

    if(!cart.length){
    return(
      <>
        <h2>No hay productos.</h2>
        <Link to='/'>
          <button className="btn btn-secondary">Volver al Inicio</button>
        </Link>
      </>
    )
  }  
  return (
    <div>
            <h1>Carrito</h1>
            <div className="row">
              <div className="col-md-6">
                <h2>Producto:</h2>
                  <ul>
                    {cart.map(product=>(
                      <>
                          <CartItems product={product} key={product.id}/>
                      </>
                    ))}
                  </ul>
              </div>
              <div className="w-25">
                <Button variant="primary" onClick={emptyCart}>Vaciar Carrito</Button>
                <Link to='/form' >
                      <Button>Finalizar Compra</Button>
                </Link>   
                        
              </div>
              <div className="w-25">
                     Precio final:{finalPrice()}
              </div>
            </div>
        </div>
    ) 
  
}

export default Cart

