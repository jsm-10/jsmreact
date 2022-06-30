import Catalogo from '../data.json'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';

function getCatalogo(){
    return new Promise( (resolve, rejected) =>{
        setTimeout(() => {
            resolve(Catalogo);
        }, 2000)
    });
}

function ItemDetailContainer() {
    const [catal, setCatal] = useState([]);

    useEffect(() => {
        getCatalogo().then( respuestaPromise => {
            setCatal(respuestaPromise[0]);
        })
    }, []);
    console.log("estamos aca" + catal);
    
    return (
    <>
    <ItemDetail catal={catal}/>
    </>

    
    );
}
export default ItemDetailContainer;