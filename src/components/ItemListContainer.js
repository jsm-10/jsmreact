
import ItemList from './ItemList'
import { useEffect, useState } from 'react';


function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setProducts(data))
    }, [])
    console.log(products);
    
    return (
    <>
    
    <ItemList products={products}/>
    </>

    
    );
}
export default ItemListContainer;