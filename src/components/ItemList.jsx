
import Item  from './Item'

function ItemList({ products }) {
    return (
    <div className='container'>
        <div className='row justify-content-evely'>
    
        {products.map((product) => <Item id={product.id} title={product.title} img={product.img} certificado={product.certificado} precio={product.precio} stock={product.stock}/>)}
        </div>
    </div>
    
    
    )
}

export default ItemList;