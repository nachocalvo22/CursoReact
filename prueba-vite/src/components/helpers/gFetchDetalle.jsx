let comidas = [
    {
        id: '1',
        categoria:'Carnes', 
        nombre: 'Hamburguesa', 
        precio: '1200',
        detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
    },  
    {
        id: '2', 
        nombre: 'Pizza', 
        precio: '1500',
        detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
    },
    {
      id: '3', 
      nombre: 'Empanadas', 
      precio: '1800',
      detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'

    },
    {
      id: '4', 
      nombre: 'Milanesas', 
      precio: '1500',
      detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'

    },    
    {
      id: '5',
      categoria:'Pastas', 
      nombre: 'Ravioles', 
      precio: '950',
      detalle: 'La Pasta mas rica del país, no dudes en probarla!'
    },
    {
      id: '6',
      categoria:'Pastas', 
      nombre: 'Ñoquis',
       precio: '870',
       detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
      },
    {
      id: '7',
      categoria:'Veggie', 
      nombre: 'Ensalada', 
      precio: '600',
      detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
    },


]

export const gFetchDetalles = new Promise( (res, rej)=> {
    let condition = true
    if(condition) {
      setTimeout (() => {
        res(comidas)
      },2000)
    } else {
      rej('Error 404 not Found')
    }
  })