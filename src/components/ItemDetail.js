
import ItemCount from './ItemCount';
function ItemDetail({ Products }) {
    
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
    <ItemCount stock={Products.stock}/>
    </div>
</div>
</div>
    )
}

export default ItemDetail;