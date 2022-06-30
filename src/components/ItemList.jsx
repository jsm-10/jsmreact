
import Item  from './Item'

function ItemList({ products }) {
    console.log(products);
    return (
    <div className='container'>
        <div className='row justify-content-evely'>
    
        {products.map((product) => <Item key ={product.id} title={product.title} img={product.img} certificado={product.certificado} precio={product.precio} stock={product.stock}/>)}
        </div>
    </div>
    
    
    )
}

export default ItemList;