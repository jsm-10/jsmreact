import './Item.css';
function Item({ title, img, certificado, precio,}) {
    
    return  (
        <div className="col">
            <div className="card mt-5">
                <img src={img} className="card-img-top" id="img" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{certificado}</p>
                        <p className="card-text">{precio}</p>
                        <a href="" className="btn btn-primary">Detalles Avanzados</a>
                    </div>
            </div>

        </div>
    )
}

export default Item;