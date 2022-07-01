import products from '../data.json'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function getProducts(categoryid){
    return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        if (categoryid !== undefined){
        const filtPro = products.filter((product) => {
        return product.type === categoryid;
        });
        resolve(filtPro)
        }else{
        resolve(products)
    }
    },700 );
});

}


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryid } = useParams(); 
    

    useEffect( ()=>{
        getProducts(categoryid).then (resp => {
            setProducts(resp)
        });
    },[categoryid]);
    
    return (
    <>
    
    <ItemList products={products}/>
    </>

    
    );
}
export default ItemListContainer;