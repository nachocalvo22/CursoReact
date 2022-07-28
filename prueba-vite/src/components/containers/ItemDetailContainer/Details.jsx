import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../../context/CarritoContext";


function Details({ details }) {

    const {cart, agregarProducto, vaciarCarrito} = useContext(CartContext)
    const [cantidad,setCantidad] = useState();

    const { nombre, precio, stock, detalle,img } = details;
    const funcionContador = (contador) =>{
      setCantidad(contador)
      const producto = {item: details, cantidad: contador}
      agregarProducto(producto)
      console.log("El valor del contador", contador);
    }
    
    console.log(cart);

    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
                {detalle} - ${precio}
          </Card.Text>
          <Button variant="primary">COMPRAR</Button>
        </Card.Body>
      </Card>
          {cantidad? [<Link to='/cart'><button>Ir al carrito</button> </Link>]
          : 
          <ItemCount stock={stock} initial={1} onAdd={funcionContador} onRemove={vaciarCarrito} />}
      </div>
    )
}

export default Details