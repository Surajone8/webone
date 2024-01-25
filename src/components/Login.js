import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { useUser } from './UserContext';
import { useUser } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                name,
                password,
            }, {
                withCredentials: true,  // Include this option to send cookies
            }
            );

            // Assuming the server returns the user data along with the token
            const { token, user } = response.data;
            console.log(user);

            // Store the token in localStorage
            localStorage.setItem('token', token);

            // Set the user in the UserContext
            loginUser(token, user);

            alert('Successfully logged in');
            navigate("/")
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='form-container'>
            <form>
                <label>Name:</label>
                <input
                    className='input'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Password:</label>
                <input
                    className='input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='register-btn' type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
