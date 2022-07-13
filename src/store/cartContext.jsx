import { useState, useContext, createContext } from 'react';



const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;




export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    

    const addToCart = (item, cant) => {
        console.log(isInCart(item.id));
        if (isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const copiarItem = {...cartItem}
                    copiarItem.cant += cant;
                    console.log("estamos aca")
                    return copiarItem;
                }
                    
                else{ 
                    console.log("12")
                    return cartItem;
        }  })
            setCart(newCart)
        }


        else {
            console.log("1234")
            const newItem = { ...item, cant };
            setCart([...cart, newItem]);
        }
    }
    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter(item => {
            return item.id !== id;
        })
        setCart(cartFilter);

    }
    const isInCart = (id) => {
        let found = false
        cart.forEach(cartItem =>  {
            console.log(cartItem);
            if (cartItem.id === id){
                console.log("asdasd");
                found = true;
                
        }
    })
        if (found){
            return true;
        }
        return false;
    }
        

    const contextFunction = () => console.log("contexto!!");
    console.log (cart);

    return (
        <Provider value={{ contextFunction, cart, addToCart }}>
            {children}
        </Provider>
    )
}

export default useCartContext;
