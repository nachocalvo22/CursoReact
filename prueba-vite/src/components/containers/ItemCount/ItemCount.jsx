import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, onAdd, initial} ) => {
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
        <Button variant="primary" onClick={()=>onAdd(count)}>Agregar al Carrito</Button>
    </>
  )
}

export default ItemCount