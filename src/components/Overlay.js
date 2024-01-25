import React from 'react'
import "./HomePage.css"
import Rating from './Rating';
import logo from './images/surajone8.png'
import CartContext from './context/CartContext';
import { useContext } from "react";
// import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useUser } from './context/UserContext';


const Overlay = (props) => {
    const { isLoggedIn, logoutUser, user } = useUser();


    const { cart, removeFromCart } = useContext(CartContext);


    const { DineData, DineName, ind } = props;
    // const currDish = DineData[ind];

    // console.log("DINEDATA================" + DineData)
    // console.log("DINENAME=============" + DineName)

    let currDishData = DineData[DineName];
    // console.log(currDishData);
    let currDish = currDishData[ind];
    // console.log(ind)
    // console.log("Dish=============" + currDish)

    const { addToCart } = useContext(CartContext);

    const navigate = useNavigate();
    // console.log(user);
    // console.log(user.data);
    let userId;
    if (user) {
        userId = user.id;
    }
    // console.log(userId)
    useEffect(() => {
        console.log(cart)
        const updateDatabase = async () => {
            try {
                // Replace 'http://localhost:3001/update-database' with your actual backend endpoint
                await axios.post('http://localhost:3001/update-database', { userId, cart });
                console.log('Database updated successfully');
                console.log(user);
            } catch (error) {
                console.error('Error updating database:', error);
            }
        };

        updateDatabase();
    }, [cart]);

    return (
        <div className="overlay-cont">
            <img className='overlayImg' src={currDish.img} alt="" />
            <div className="food-desc">
                <div className="food-desc-1">
                    <p className='overlay-name'>{currDish.name}</p>
                    <p className='overlay-line1'>{currDish.dsc}</p>
                    <p className='overlay-line2'>Price : Rs.{currDish.price}</p>
                    <Rating rating={currDish.rate} />
                    <p className='overlay-line3'>Place Of Origin : {currDish.country}</p>
                    <div className="food-desc-btn-cont">
                        <button className='food-desc-btn' onClick={() => addToCart(currDish)}>Add Menu</button>
                        <button className='food-desc-btn' onClick={() => navigate('/cart')}>View Menu</button>
                    </div>
                </div>
                <div className="food-desc-logo">
                    <img className='food-desc-logoImg' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Overlay