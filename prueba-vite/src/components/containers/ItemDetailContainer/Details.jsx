import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../../context/CarritoContext";


function Details({ details }) {

    const { addItem} = useContext(CartContext)
    const [quantity,setQuantity] = useState();

    const { nombre, precio, stock, detalle,img } = details;
    const funcionContador = (contador) =>{
      setQuantity(contador)
      const product = {item: details, quantity: contador}
      addItem(product)
      console.log(product);
    }
    

    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
                {detalle} - ${precio}
          </Card.Text>
          <Button variant="primary">
          {quantity? [<Link to='/cart'><Button variant="primary" >Ir al carrito</Button> </Link>]
          : 
          <ItemCount stock={stock} initial={1} onAdd={funcionContador}  />}
            </Button>
        </Card.Body>
      </Card>

      </div>
    )
}

export default Details