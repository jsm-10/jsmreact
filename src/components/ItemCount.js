import React, { useState } from "react";

function ItemCount(props) {
    const [cant, setCant] = useState(1);

    function agregar(){
        if(cant < props.stock)
        setCant(cant + 1);
    }
    function restar(){
        if (cant > 1){
        setCant(cant -1);
        }
    }
    function handleClick(){
        props.onAdd(cant);
    }
    return (
        <div className="">
            <h3 className="d-flex justify-content-center fs-6">Seleccionar</h3>
            <div className="d-flex justify-content-center align-self-center space-between-4 ">
                <button type="button" className="btn btn-dark align-self-center " onClick={restar}>-</button>
                <p className='btn btn-outline-dark align-self-center'>   {cant}      </p>
                <button type="button" className='btn btn-dark align-self-center' onClick={agregar}>+</button>
            </div>
            <div className="d-flex justify-content-center align-self-center">
                <button type="button" onClick={handleClick} className="btn btn-outline-dark " >Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;