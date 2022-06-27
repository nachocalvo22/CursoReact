import {useState, useEffect} from 'react'
import { gFetch } from '../../helpers/gFetch'


 const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    
    gFetch
    .then( res => setProducts(res))
    .catch( err => console.log(err))

    },[])


    
  console.log(products);
  return (
    <div>
        {products.map(prod => <div
                                      key={prod.id}
                                      className="card">
                                      <div className="card-header">
                                        Comidas
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">{prod.nombre}</h5>
                                        <p className="card-text">Precio: ${prod.precio}</p>
                                        <a href="#" className="btn btn-primary">Comprar</a>
                                      </div>
                              </div>)}
    </div>
  )
}

export default ItemListContainer