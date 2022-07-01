import Products from '../data.json'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function getProducts(id){
    return new Promise( (resolve, rejected) =>{
        setTimeout(() => {
            const productsFound = Products.find ((product) =>{
                return parseInt(id) === product.id;
            })
            resolve(productsFound);
        }, 700);
    });
}

function ItemDetailContainer() {
    const [Products, setProducts] = useState([]);
    const { itemid } = useParams();

    useEffect(() => {
        getProducts(itemid).then( respuestaPromise => {
            setProducts(respuestaPromise);
        })
    }, [itemid]);
    
    
    return (
    <>
    <ItemDetail Products={Products}/>
    </>

    
    );
}
export default ItemDetailContainer;