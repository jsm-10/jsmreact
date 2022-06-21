
import './Cards.css';

function Cards(props) {
    return (
        <div className='row card container col-4 mt-5'>    
<img src= {props.img} className="card-img-top" alt='imagen ilustrativa'/>
<div class="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
</div>
<ul className="list-group list-group-flush">
    <li className="list-group-item">{props.precio}</li>
    <li className="list-group-item">{props.uso}</li>
    <li className="list-group-item">{props.certificado}</li>
</ul>
</div>
    );
}

export default Cards;
