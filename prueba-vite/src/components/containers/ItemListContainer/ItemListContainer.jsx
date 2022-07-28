import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


 const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()


     useEffect(() => {
      const db = getFirestore()
      if(categoriaId){
        const queryCollection = collection(db,'productos')
        const queryCollectionFilter = query(queryCollection,where('categoria','==',categoriaId)) //SOLO TRAE UN PRODCUTO CON LIMIT
        getDocs (queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(prod => (({id: prod.id, ...prod.data()})))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }else{
      const queryCollection = collection(db,'productos')
      getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(prod => (({id: prod.id, ...prod.data()})))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }

    },[categoriaId])


    
  return (
    <div>

       {loading?
        <h2>Cargando...</h2> :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer