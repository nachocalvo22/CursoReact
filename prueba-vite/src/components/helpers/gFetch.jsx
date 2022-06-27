let comidas = [
    {id: '1', nombre: 'Hamburguesa', precio: '1200',},  
    {id: '2', nombre: 'Pizza', precio: '1500'},
    {id: '3', nombre: 'Empanadas', precio: '1800'},
    {id: '4', nombre: 'Milanesas', precio: '1100'},
    {id: '5', nombre: 'Pastas', precio: '950'},

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