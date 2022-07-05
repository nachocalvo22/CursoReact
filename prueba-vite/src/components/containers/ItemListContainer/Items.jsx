import React from "react";

function Item({products}){
    const {nombre,precio,img} = products;
    return(
        <div
                                      className="card">
                                      <div className="card-header">
                                        Comidas
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">{nombre}</h5>
                                        <p className="card-text">Precio: ${precio}</p>
                                        <a href="#" className="btn btn-primary">Comprar</a>
                                      </div>
                              </div>
    )
}
export default Item