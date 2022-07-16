let comidas = [
    {
        id: '1',
        categoria:'Carnes', 
        nombre: 'Hamburguesa', 
        precio: '1200',
        stock: '4',
        detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
    },  
    {
        id: '2', 
        nombre: 'Pizza', 
        precio: '1500',
        stock: '10',
        detalle: 'La hamburguesa mas rica del país, no dudes en probarla!'
    },
    {
      id: '3', 
      nombre: 'Empanadas', 
      precio: '1800',
      stock: '75',
      detalle: 'La Empanada mas rica del país, no dudes en probarla!'

    },
    {
      id: '4', 
      nombre: 'Milanesas', 
      precio: '1500',
      stock: '50',
      detalle: 'La milanesa mas rica del país, no dudes en probarla!'

    },    
    {
      id: '5',
      categoria:'Pastas', 
      nombre: 'Ravioles', 
      precio: '950',
      stock: '100',
      detalle: 'La Pasta mas rica del país, no dudes en probarla!'
    },
    {
      id: '6',
      categoria:'Pastas', 
      nombre: 'Ñoquis',
       precio: '870',
       stock: '100',
       detalle: 'La pasta mas rica del país, no dudes en probarla!'
      },
    {
      id: '7',
      categoria:'Veggie', 
      nombre: 'Ensalada', 
      precio: '600',
      stock: '10',
      detalle: 'La ensalada mas rica del país, no dudes en probarla!'
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