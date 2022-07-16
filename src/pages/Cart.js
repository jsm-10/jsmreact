import React from "react";
import useCartContext from "../store/cartContext";
import {Link} from 'react-router-dom';

function Cart () {
    const { cart, removeFromCart, clearCart} = useCartContext();
    let suma=0;
    cart.map( i =>  suma = ( suma + ( parseInt(i.precio) * parseInt(i.cant)) ))
    console.log("Cart",cart);
    if(cart.length === 0){
    return(
    <div style={{textAlign: "center"}}>
        <h4>No se encuentran Productos</h4>
        <Link to={"/Shop"}><button type="button"  className="btn btn-outline-dark mb-5" >Volver al shop</button></Link>
        </div>
    )
    
    
} else{
    return (
        <div style={{textAlign: "center"}}>
            {cart.map( prodCart => {
                return <div className="card" key={prodCart.id}>
                    <div className="card-body">
                    <h2>{prodCart.title}</h2>
                    <h2>{prodCart.certificado}</h2>
                    <h2>Precio: {prodCart.precio}</h2>
                    <h2>Cantidad: {prodCart.cant}</h2>
                    <h2>Precio total: ${prodCart.cant * prodCart.precio}</h2>
                    <button onClick={()=> removeFromCart(prodCart.id)} type="button" className="btn-close"></button>
                    </div>
                    </div>
            })}
            <br></br>
            <button type="button" onClick={clearCart} className="btn btn-outline-dark">Borrar Carrito</button>
            <h2>Precio total ${suma}</h2>
            <button type="button" className="btn btn-outline-dark">Finalizar tu compra</button>
        </div>
    )
}    
}
export default Cart;