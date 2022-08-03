import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ItemDetails from "./ItemDetails";


const ItemDetailContainer = () => {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const {detailsId} = useParams()




     useEffect(()=>{
      const db = getFirestore()
      const queryProduct = doc(db,'productos', detailsId)
      getDoc(queryProduct)
      .then((resp) => {setDetails({id: resp.id, ...resp.data()})})
      .catch( err => console.log(err))
      .finally(()=> setLoading(false))
    },[detailsId])



  return (
    <div>
      {loading?
        <Loading/> :
        <ItemDetails details={[details]}  />
      }
    </div>
  )
}

export default ItemDetailContainer