import logo from '../assets/logosfondo.png';
import './Navbar.css';
import Carrito from './CartWidget.js';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg stylenav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src={logo} className='logo__nav' alt='logo'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d flex" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Us">Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/VideoCard">VideoCards</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/category/Procesador">Procesadores</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/category/Almacenamiento">Almacenamiento</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/category/Gabinete">Gabinetes</Link>
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