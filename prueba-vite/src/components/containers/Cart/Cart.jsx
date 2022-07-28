import { useContext } from "react"
import { Container } from "react-bootstrap";
import { CartContext } from "../../../context/CarritoContext"


const Cart = () => {

  const {cart, vaciarCarrito,quitarCarrito,precioFinal,cantidadTotal} = useContext(CartContext)

  console.log(cart);
  return (
    <div>
            <h1>Carrito</h1>
            <div className="row">
              <div className="col-md-6">
                <h2>Producto:</h2>
                  <ul>
                    {cart.map(product=>(
                      <>
                        <li  key={product.id}>
                          {/* <img src={product.img} alt='Foto producto' className="w-25"/> */}
                          <span>- Nombre: {product.item.nombre}</span>
                          <span>- Precio:{product.item.precio}</span>
                          <span>- Cantidad: {product.cantidad}</span>
                          <button onClick={()=> quitarCarrito(product.item.id)}>X</button>
                        </li>
                      </>
                    ))}
                  </ul>
              </div>
              <div className="w-25">
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              </div>
              <div className="w-25">
                     Precio final:{precioFinal()}
              </div>

            </div>
        </div>
    ) 
  
}

export default Cart

