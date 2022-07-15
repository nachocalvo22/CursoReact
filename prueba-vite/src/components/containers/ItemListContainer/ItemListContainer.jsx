import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import ItemList from './ItemList'


 const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
    if(categoriaId){
      gFetch
      .then( res => setProducts(res.filter( prod => prod.categoria === categoriaId)))
      .catch( err => console.log(err))
      .finally
  
    }else{
      gFetch
      .then( res => setProducts(res))
      .catch( err => console.log(err))
      .finally
    }

    },[categoriaId])

    console.log(categoriaId);

    
  console.log(products);
  return (
    <div>

      <ItemList products={products}/>

    </div>
  )
}

export default ItemListContainer