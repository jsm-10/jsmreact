import './Item.css';
import {Link} from 'react-router-dom'


function Item({ img, title, certificado, precio, id }) {

    
    return  (
        <div className="col">
            <div className="card mt-5">
                <img src={img} className="card-img-top" id="img" alt="Imagen ilustrativa"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{certificado}</p>
                        <p className="card-text">{precio}</p>
                        <Link to={`/product/${id}`} className="btn btn-primary">Detalles Avanzados</Link>
                    </div>
            </div>

        </div>
    )
}

export default Item;