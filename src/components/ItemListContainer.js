
import ItemList from './ItemList'
import { useEffect, useState } from 'react';


function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(
            ()=>{
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setProducts(data))
            },3000
        )
    }, [])
    
    
    return (
    <>
    
    <ItemList products={products}/>
    </>

    
    );
}
export default ItemListContainer;