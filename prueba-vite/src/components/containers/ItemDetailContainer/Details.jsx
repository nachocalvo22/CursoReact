import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Details({ details }) {
    const { id, nombre, precio, detalle } = details;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
                {detalle} - {precio}
          </Card.Text>
          <Button variant="primary">COMPRAR</Button>
        </Card.Body>
      </Card>
    )
}

export default Details