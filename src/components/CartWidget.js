import {BsCart} from 'react-icons/bs';
import useCartContext from "../store/cartContext";
import {Link} from 'react-router-dom'

function CartWidget() {
    const { cart, clearCart} = useCartContext();
    let suma=0;
    cart.map( i =>  suma = ( suma + parseInt(i.cant) ))
    return (
    <>
    <Link to={"/Cart"}><BsCart size='25'/></Link>
    <p>{suma}</p>
    <button onClick={clearCart} type="button" className="btn-close"></button>
    </>
    );
}

export default CartWidget;