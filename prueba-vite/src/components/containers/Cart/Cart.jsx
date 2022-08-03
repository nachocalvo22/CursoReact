import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { useContext, useState } from "react"
import { Button } from "react-bootstrap";
import { CartContext } from "../../../context/CarritoContext"


const Cart = () => {

  const {cart, emptyCart,quitarCarrito,finalPrice} = useContext(CartContext)


  const [id, setId] = useState()
  const generateOrder = async ()=> {
    const order = {}
    order.buyer = {
      name: 'Nachi',
      telefono: '111',
      email: 'pepe@pepe.com'
    }
    order.items = cart.map(prod =>{
      const id = prod.item.id
      const price = prod.item.precio
      const title = prod.item.nombre 
      const quantity = prod.quantity
      return {id,price,title,quantity}

    })
    order.total = finalPrice()

//Insertar una Orden
    const db = getFirestore()
    const queryInsertarCollection = collection(db,'orders')
    addDoc(queryInsertarCollection,order)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
    .finally(()=> emptyCart()) 

//Actualizar documento (stock o cualquier otra cosa)
    /* 
    const db = getFirestore()
    const queryUpdated = doc(db,'productos', 'WCDVrr5jzfDEN68DDvc6')
    updateDoc(queryUpdated,
      {stock:90})
    .then(()=> console.log('acutalizado')) */

/*     const db = getFirestore() 
    const queryCollectionStock = collection(db,'productos')

    const queryUpdatedStock = await query(
        queryCollectionStock,
        where(documentId(),'in',cart.map(it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdatedStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cart.find(item => item.id ===res.id).cantidad
    })))
    .finally(()=>alert('Compra Realizada.'))

    batch.commit() */
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
                        <li  key={product.id}>
                          {/* <img src={product.img} alt='Foto producto' className="w-25"/> */}
                          <span>- Nombre: {product.item.nombre}</span>
                          <span>- Precio:{product.item.precio}</span>
                          <span>- Cantidad: {product.cantidad}</span>
                          <Button variant="primary" onClick={()=> quitarCarrito(product.item.id)}>X</Button>
                        </li>
                      </>
                    ))}
                  </ul>
              </div>
              <div className="w-25">
                <Button variant="primary" onClick={emptyCart}>Vaciar Carrito</Button>
                <Button variant="primary" onClick={generateOrder}>Orden</Button>

              </div>
              <div className="w-25">
                     Precio final:{finalPrice()}
              </div>
              
              <div>
                  {id && <div>El id de su producto es: {id}</div>}
              </div>

            </div>
        </div>
    ) 
  
}

export default Cart

