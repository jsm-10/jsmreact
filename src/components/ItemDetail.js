import {Link} from 'react-router-dom'
import { useState } from 'react';
import ItemCount from './ItemCount';
import useCartContext from '../store/cartContext';

function ItemDetail({ products }) {
    const [enCarrito, setenCarrito] = useState(false);
    const { addToCart } = useCartContext();
    
    function onAdd(cant){
        setenCarrito(true);
        addToCart(products, cant);
        console.log("agregado al cart", products, cant)
    }
    
    return  (
        <div className="card mb-3">
<div className="row g-0">
    <div className="col-md-4">
    <img src={products.img} className="img-fluid rounded-start" alt="imagen producto"/>
    </div>
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <p className="card-text"><small className="text-muted">{products.precio}</small></p>
        <p className="card-text"><small className="text-muted">{products.certificado}</small></p>
        <p className="card-text"><small className="text-muted">{products.uso}</small></p>
    </div>
    {enCarrito?
    <Link to={"/cart"}><button type="button"  className="btn btn-outline-dark mb-5" >Ver compras</button></Link>
    :
    <ItemCount  onAdd={onAdd} stock={products.stock}/>
    }
    </div>
</div>
</div>
    )
}


export default ItemDetail;