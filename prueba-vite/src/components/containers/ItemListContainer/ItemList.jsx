import Item from './Items'

const ItemList = ({producto}) => {
    return(
        <div>
            {producto.map ((prod) => (
                <Item produts={prod} key={prod.id} />
            ))}
        </div>
    )
}

export default ItemList