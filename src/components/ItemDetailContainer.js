
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/firestore';

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const { itemid } = useParams();

    useEffect(() => {
        getProduct(itemid)
        .then( respuestaPromise => {
            console.log("promesa" + respuestaPromise);
            setProducts(respuestaPromise);
        })
    }, [itemid]);
    
    
    return (
    <>
    <ItemDetail products={products}/>
    </>

    
    );
}
export default ItemDetailContainer;