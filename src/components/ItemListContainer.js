
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getItemsCat } from '../services/firestore'


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryid } = useParams(); 

    

    useEffect( ()=>{
        if(categoryid === undefined){
            getAllProducts().then (data => {
                setProducts(data)
            });
        }
        else{
            getItemsCat(categoryid).then (data => {
                setProducts(data)
            });
        }
        
    },[categoryid]);
    
    return (
    <>
    
    <ItemList products={products}/>
    </>

    
    );
}
export default ItemListContainer;