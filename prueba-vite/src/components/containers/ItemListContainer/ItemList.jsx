import Item from './Items'

const ItemList = ({products}) => {
    return(
        <div>
            {products.map ((prod) => (
                <Item products={prod} key={prod.id} />
            ))}
        </div>
    )
}

export default ItemList



