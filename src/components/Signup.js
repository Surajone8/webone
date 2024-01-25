import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Install with: npm install bcryptjs
import "./HomePage.css"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dataFromDatabase, setDataFromDatabase] = useState([]);

    // const [data, setData] = useState([]);
    // const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        // Perform client-side validation
        if (!name || !email || !password || !confirmPassword || !phone) {
            console.error('Please fill in all required fields and agree to terms.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            console.error('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/signup', {
                name,
                email,
                password,
                phone,
            });

            // Handle the response accordingly (e.g., display a success message)
            console.log(response.data);
            navigate("/login");

        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error('Signup error:', error);
        }




    };
    const fetchDataFromDatabase = async () => {
        try {
            const response = await axios.get('http://localhost:3001/get-Userdata');

            if (response.status === 200) {
                console.log('Data retrieved successfully:', [...response.data]);
                // Set the retrieved data in the state
                setDataFromDatabase(response.data);
                console.log(dataFromDatabase)
            } else {
                console.error('Error retrieving data');
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    useEffect(() => {
        // Fetch data when the component mounts
        fetchDataFromDatabase();
    }, []);

    return (
        <div className='form-container'>
            {/* <h2>Signup</h2> */}
            <form>
                {/* Include input fields for name, email, password, confirm password, phone, and data */}
                <label>Name:</label>
                <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Confirm Password:</label>
                <input className='input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <label>Phone:</label>
                <input className='input' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <button className='register-btn' type="button" onClick={handleSignup}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
