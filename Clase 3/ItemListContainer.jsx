import {useState, useEffect} from 'react'

 const ItemListContainer = ({saludo}) => {
  const [count , setCount] = useState(0)
  //let count = 0 Esto NO VA
  const[boolean, setBoolean] = useState (true)

  const aumentar = () => {
  setCount(count + 1)
}

const cambiarEstado = () => {
  setBoolean(!boolean)
}

useEffect (()=>{  //SE EJECUTA DESPUES DEL MONTAJE 
  console.log("Se ejecuta SIEMPRE ESTO 1");
  return () => {
    console.log("DESMONTAR ");
  }
})

/* useEffect (()=>{  //SE EJECUTA UNA SOLA VEZ EN EL MONTADO (PRIMER RENDER)
  console.log("LLAMA UNA SOLA VEZ 3");
  //set() Y LO QUE TRAIGO DE LA API

}, []) //ACA ESTA LA DIFERENCIA CON EL OTRO


useEffect (()=>{
  console.log("Cambio de estado 4");

},[boolean,count]) */


/* console.log("Lamada 2");
 */
  return (
    <div>{saludo}
    {count} {Date()}
    <button onClick={aumentar}>aumentar</button>
    <button onClick={cambiarEstado}>cambiarEstado</button>

    </div>
  )
}

export default ItemListContainer