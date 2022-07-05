import {useState, useEffect} from 'react'
import { gFetch } from '../../helpers/gFetch'
import ItemList from './ItemList'


 const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    
    gFetch
    .then( res => setProducts(res))
    .catch( err => console.log(err))
    .finally

    },[4000])


    
  console.log(products);
  return (
    <div>

      <ItemList producto={products}/>

    </div>
  )
}

export default ItemListContainer