import React, { useEffect, useState } from "react";
import useCartContext from "../store/cartContext";
import { Link, useParams } from 'react-router-dom';
import { createBuyOrder } from "../services/firestore";
import Swal from 'sweetalert2';

function Cart() {
    const { cart, removeFromCart, clearCart, } = useCartContext();
    let suma = 0;
    cart.map(i => suma = (suma + (parseInt(i.precio) * parseInt(i.cant))))
    const [orderId, setOrderId] = useState();
    const {id} = useParams();
    

    useEffect(() =>{
        createBuyOrder(id)
        .then(respuesta =>{
            setOrderId(respuesta)
        })
        }, []);

    function pressCompra() {
        
    
        const buyOrder = {
            buyer: {
                name: "Jsm",
                phone: "12345678",
                email: "jsm@coder.com",

            },
            items: {...cart},
            total: ({ suma })
        }
        createBuyOrder(buyOrder);
        clearCart();
        setOrderId(createBuyOrder.id);
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada!',
            text: `Su numero de orden es ${orderId}`,
            footer: 'Verifique su casilla de mail para el seguimiento'
            
    })
    }

    if (cart.length === 0) {
        
        return (
            <div style={{ textAlign: "center" }}>
                
                <h4>No se encuentran Productos</h4>
                <Link to={"/Shop"}><button type="button" className="btn btn-outline-dark mb-5" >Volver al shop</button></Link>


            </div>
        )


    } else {
        return (
            <div style={{ textAlign: "center" }}>
                {cart.map(prodCart => {
                    return <div className="card" key={prodCart.id}>
                        <div className="card-body">
                            <h2>{prodCart.title}</h2>
                            <h2>{prodCart.certificado}</h2>
                            <h2>Precio: {prodCart.precio}</h2>
                            <h2>Cantidad: {prodCart.cant}</h2>
                            <h2>Precio total: ${prodCart.cant * prodCart.precio}</h2>
                            <button onClick={() => removeFromCart(prodCart.id)} type="button" className="btn-close"></button>
                        </div>
                    </div>
                })}
                <br></br>
                <button type="button" onClick={clearCart} className="btn btn-outline-dark">Borrar Carrito</button>
                <h2>Precio total ${suma}</h2>
                <Link to={"/"}><button onClick={pressCompra} type="button" className="btn btn-outline-dark">Finalizar tu compra</button></Link>

            </div>
        )
    }
}
export default Cart;