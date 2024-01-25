import React, { useState } from 'react';
import CartContext from './CartContext';
// import { useUser } from './UserContext';

const CartProvider = ({ children }) => {
    // const { isLoggedIn, logoutUser, user } = useUser();
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        setCart(prevCart => [...prevCart, JSON.stringify(product)]);
    };

    const removeFromCart = productId => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
