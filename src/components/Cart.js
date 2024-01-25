import React, { useContext } from 'react';
// import CartContext from './CartContext';
import CartContext from './context/CartContext';
import "../components/HomePage.css"
import { useUser } from './context/UserContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const { isLoggedIn, logoutUser, user } = useUser();
    // const cart1 = user.data;

    console.log("cart:", ...cart);
    // console.log("cart1:", cart1);



    return (
        <>
            {user && isLoggedIn ? (
                <>
                    <div>
                        <ul className='cart-cont'>
                            <h2 className='cart-title'>Order Menu</h2>
                            {cart.map(item => (
                                <li key={item.id} className='cart-cont-ele'>
                                    {/* {item.name} - ${item.price}{' '} */}
                                    <div className="DineDish-cart-cont">
                                        <img className='DineDish-img' src={item.img} alt="" />
                                        <div className="DineDish-description">
                                            <div className="DineDish-text">
                                                <h6>{item.name}</h6>
                                                {/* <hr /> */}
                                                <h5>Rs. {item.price}</h5>
                                            </div>
                                            <div className="DineDish-desc">
                                                <p className='DineDish-text-para'>{item.dsc}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <button className='cart-remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <p>No User No Data</p>
                </>
            )}

        </>

    );
};

export default Cart;
