import React, { useState, useEffect } from "react";
import useCartContext from "../store/cartContext";
import { Link, useParams } from 'react-router-dom';
import { createBuyOrder } from "../services/firestore";
import Swal from 'sweetalert2';

function Cart() {
    const { cart, removeFromCart, clearCart, } = useCartContext();
    let suma = 0;
    cart.map(i => suma = (suma + (parseInt(i.precio) * parseInt(i.cant))))
    const [orderId, setOrderId] = useState("");
    const { id } = useParams();



    function pressCompra() {
        setOrderId(createBuyOrder.id);

        const buyOrder = {
            buyer: {
                name: "Jsm",
                phone: "12345678",
                email: "jsm@coder.com",

            },
            items: [...cart],
            total: ({ suma })
        }
        createBuyOrder(buyOrder);
        clearCart();
    }


    useEffect(() => {
        createBuyOrder(id)
            .then(respuestaPromise => {
                setOrderId(respuestaPromise);
            })
    }, []);
   
    

    if (cart.length === 0) {
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada!',
            text: 'Gracias por confiar en nosotros!!',
            
    })
        return (
            <div style={{ textAlign: "center" }}>
               
                
                <h4>No se encuentran Productos</h4>
                <Link to={"/Shop"}><button type="button" className="btn btn-outline-dark mb-5" >Volver al shop</button></Link>
                <h4>Su orden es {orderId}</h4>
                <br />
                <span>Nos contactaremos a la brevedad para informale el estado del envio</span>

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
                <button onClick={pressCompra} type="button" className="btn btn-outline-dark">Finalizar tu compra</button>

            </div>
        )
    }
}
export default Cart;