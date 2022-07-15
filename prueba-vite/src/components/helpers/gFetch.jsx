let comidas = [
    {id: '1',categoria:'Carnes', nombre: 'Hamburguesa', precio: '1200',},  
    {id: '2', nombre: 'Pizza', precio: '1500'},
    {id: '3', nombre: 'Empanadas', precio: '1800'},
    {id: '4',categoria:'Carnes', nombre: 'Milanesas', precio: '1100'},
    {id: '5',categoria:'Pastas', nombre: 'Ravioles', precio: '950'},
    {id: '6',categoria:'Pastas', nombre: 'Ñoquis', precio: '870'},
    {id: '7',categoria:'Veggie', nombre: 'Ensalada', precio: '600'},


]

export const gFetch = new Promise( (res, rej)=> {
    let condition = true
    if(condition) {
      setTimeout (() => {
        res(comidas)
      },2000)
    } else {
      rej('Error 404 not Found')
    }
  })