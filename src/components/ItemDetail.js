import {Link} from 'react-router-dom'
import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ Products }) {
    const [enCarrito, setenCarrito] = useState(false);
    function onAdd(cant){
        console.log(`agregaste al carrito ${cant} productos.`);
        setenCarrito(true);
    }
    
    return  (
        <div className="card mb-3">
<div className="row g-0">
    <div className="col-md-4">
    <img src={Products.img} className="img-fluid rounded-start" alt="imagen producto"/>
    </div>
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{Products.title}</h5>
        <p className="card-text">{Products.description}</p>
        <p className="card-text"><small className="text-muted">{Products.precio}</small></p>
        <p className="card-text"><small className="text-muted">{Products.certificado}</small></p>
        <p className="card-text"><small className="text-muted">{Products.uso}</small></p>
    </div>
    {enCarrito?
    <Link to={"/cart"}><button type="button"  className="btn btn-outline-dark mb-5" >Ver compras</button></Link>
    :
    <ItemCount  onAdd={onAdd} stock={Products.stock}/>
    }
    </div>
</div>
</div>
    )
}

export default ItemDetail;