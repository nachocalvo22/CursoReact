import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { gFetchDetalles } from "../../helpers/gFetchDetalle"
import ItemDetails from "./ItemDetails";


const ItemDetailContainer = () => {
  const [details, setDetails] = useState([])
  const {detailsId} = useParams()

  useEffect(() => {
  if(detailsId){
    gFetchDetalles
    .then( res => setDetails(res.filter( prod => prod.id === detailsId)))
    .catch( err => console.log(err))
    .finally

  }else{
    gFetchDetalles
    .then( res => setDetails(res))
    .catch( err => console.log(err))
    .finally
  }
   
  },[detailsId])

  console.log(detailsId);
  return (
    <ItemDetails details={details}  />
  )
}

export default ItemDetailContainer