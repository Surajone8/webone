import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
// import jwtDecode from 'jwt-decode'

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [userCart, setUserCart] = useState([]);

    const getUserDataFromToken = async (token) => {
        try {
            const response = await axios.post('http://localhost:3001/verify-token', { token }).then(data => {
                setUser(data.data);
                console.log(data.data);
                console.log(data.data.data);
            });
            // return response.data.user;

            return [response];

            // console.log("userDattaaa:", response.data.user);
        } catch (error) {
            console.error('Error verifying token:', error);
            return null;
        }
    };
    // console.log(user)
    // useEffect(() => {
    //     // Set a test cookie
    //     Cookies.set('testCookie', '123', { expires: 1, path: '/' });

    //     // Get the test cookie
    //     const testCookie = Cookies.get('testCookie');
    //     console.log('Test Cookie:', testCookie);
    // }, []);

    useEffect(() => {
        // Check for the existence of the token cookie on page load
        const token = Cookies.get('token');

        if (token) {
            // const decodedToken = jwtDecode(token);
            // console.log("tokeennnnn", token)
            const userData = getUserDataFromToken(token);

            // if (userData) {
            //     // console.log("useeerrrrdataaa", userData)
            //     // setUser(userData);
            //     // console.log(user);
            // }
        }
    }, [user]); // Run this effect only once on mount


    // useEffect(() => {
    //     console.log('Cookies:', document.cookie);

    //     // Rest of your code
    // }, []);
    // const userId = user.id;
    // useEffect(() => {
    //     const fetchUserCart = async () => {
    //         try {
    //             // Replace 'http://localhost:3001/get-user-cart' with your actual backend endpoint
    //             const response = await axios.get(`http://localhost:3001/get-user-cart?userId=${userId}`);
    //             setUserCart(response.data.userCart);
    //             console.log("======-----------=======", userCart)
    //         } catch (error) {
    //             console.error('Error fetching user cart:', error);
    //         }
    //     };

    //     fetchUserCart();
    // }, []);






    const loginUser = (token, userData) => {
        // Set the user and token in both the context and the cookie
        setUser(userData);
        Cookies.set('token', token, { expires: 1, path: '/' }); // Adjust options as needed
    };

    const logoutUser = () => {
        // Clear the user and token from both the context and the cookie
        setUser(null);
        Cookies.remove('token', { path: '/' }); // Adjust options as needed
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
