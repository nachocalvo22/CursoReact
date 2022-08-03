import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Loading from '../../Loading/Loading'


 const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    const getFechFirestore = () =>{
      const db = getFirestore()
      const queryCollection = collection(db,'productos')
      const queryCollectionFilter = categoriaId ?  query(queryCollection,where('categoria','==',categoriaId)) : queryCollection

       getDocs (queryCollectionFilter)
       .then(resp => setProducts(resp.docs.map(prod => (({id: prod.id, ...prod.data()})))))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false))
    }

     useEffect(() => {

      getFechFirestore()
    

    },[categoriaId])


    
  return (
    <div>

       {loading?
        <Loading/> :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer