
import ItemCount from './ItemCount';
function ItemDetail({ catal }) {
    
    return  (
        <div className="card mb-3">
<div className="row g-0">
    <div className="col-md-4">
    <img src={catal.img} className="img-fluid rounded-start" alt="imagen producto"/>
    </div>
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{catal.title}</h5>
        <p className="card-text">{catal.description}</p>
        <p className="card-text"><small className="text-muted">{catal.precio}</small></p>
        <p className="card-text"><small className="text-muted">{catal.certificado}</small></p>
        <p className="card-text"><small className="text-muted">{catal.uso}</small></p>
    </div>
    <ItemCount stock={catal.stock}/>
    </div>
</div>
</div>
    )
}

export default ItemDetail;