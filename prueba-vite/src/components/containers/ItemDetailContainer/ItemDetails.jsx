import React from 'react'
import Details from './Details'

const ItemDetails = ({details}) => {
    return (
      <div>
          {details.map((det) =>(
            <Details details={det} key={det.id}/>
      ))}  
      </div>
    )
}

export default ItemDetails