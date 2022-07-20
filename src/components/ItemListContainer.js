
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../services/firestore'


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryid } = useParams(); 

    

    useEffect( ()=>{
        
        getAllProducts().then (data => {
            setProducts(data)
        });
    },[categoryid]);
    
    return (
    <>
    
    <ItemList products={products}/>
    </>

    
    );
}
export default ItemListContainer;