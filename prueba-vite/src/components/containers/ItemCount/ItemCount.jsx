import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, onAdd,onRemove, initial} ) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        if(count > initial ){
            setCount(count -1)
        }
    }
    
    const sumar = () => {
        if(count < stock ){
            setCount(count + 1)
        }
    }


  return (
    <>
        <span onClick={restar}> - </span>
        <span> {count} </span>
        <span onClick={sumar}> + </span>
        <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        <button onClick={()=>onRemove(count)}>Cancelar compra</button>


    </>
  )
}

export default ItemCount