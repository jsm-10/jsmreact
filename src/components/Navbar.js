import logo from '../assets/logosfondo.png';
import './Navbar.css';
import Carrito from './CartWidget.js';


function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg stylenav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className='logo__nav'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d flex" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                        </ul>
                        
                    </div>
                    <Carrito className='d-flex justify-content-evenly'/>
                </div>
                
            </nav>
        </header>
    )
}
export default Navbar;