import React from "react";
import { Link } from "react-router-dom";

function Item({products}){
    const {id,nombre,precio,img} = products;
    return(
        <div
                                      className="card">
                                      <div className="card-header">
                                        Comidas
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">{nombre}</h5>
                                        <p className="card-text">Precio: ${precio}</p>
                                        <Link to={`/detalle/${id}`}>
                                            <a href="#" className="btn btn-primary">Detalles</a>
                                        </Link>
                                      </div>
                              </div>
    )
}
export default Item

