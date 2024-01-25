import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Cookies from 'js-cookie';
import './Navbar.css';

const Navbar = () => {
    const { isLoggedIn, logoutUser, user } = useUser();
    // console.log("============nav=====", user);

    useEffect(() => {
        // If you need to perform any actions on component mount, you can do it here
    }, []);

    const handleLogout = () => {
        // Clear the token on logout
        Cookies.remove('token'); // Use the Cookies library to remove the cookie
        logoutUser();
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                        Cart
                    </Link>
                </li>

                {user ? (
                    <>
                        {/* Additional items or actions for logged-in users */}
                        <li className="nav-item">
                            <p style={{ color: "white" }}>{user.name}</p>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        {/* Additional items or actions for non-logged-in users */}
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
