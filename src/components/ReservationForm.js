import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Input from './Input';
import logo from './images/surajone8.png';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        date: '',
        time: '',
        seats: 0,
        special_request: '',
    });


    const [dataFromDatabase, setDataFromDatabase] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/submit-form', formData);

            if (response.status === 200) {
                console.log('Form submitted successfully');
                // Handle success (e.g., show a success message)
            } else {
                console.error('Error submitting form');
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const fetchDataFromDatabase = async () => {
        try {
            const response = await axios.get('http://localhost:3001/get-data');

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



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <img className='form-logo' src={logo} alt="" />
                    {/* <Input name="name" type="text" placeholder="Enter Your Name" labelName="Name" funct={setName} />
                    <Input name="email" type="email" placeholder="Enter Your Email" labelName="Email" funct={setEmail} />
                    <Input name="phone" type="tel" placeholder="Enter Your Phone" labelName="Phone" funct={setPhone} />
                    <Input name="date" type="date" placeholder="Enter Your Date" labelName="Date" funct={setDate} />
                    <Input name="time" type="time" placeholder="Enter Your Time" labelName="Time" funct={setTime} />
                    <Input name="seats" type="number" placeholder="Number Of People" labelName="Seats" funct={setSeats} />
                    <Input name="request" type="textarea" placeholder="Special Request" labelName="Special Request" funct={setRequest} /> */}
                    <div className="input-cont">
                        <label htmlFor="Name">Name</label>
                        <input className='input' type="text" id="name" placeholder="Enter You Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Email">Email</label>
                        <input className='input' type="email" id="email" placeholder="Enter You Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Phone">Phone</label>
                        <input className='input' type="tel" id="phone_number" placeholder="Enter You Phone" value={formData.phone_number} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Date">Date</label>
                        <input className='input' type="date" id="date" placeholder="Enter You Date" value={formData.date} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Time">Time</label>
                        <input className='input' type="time" id="time" placeholder="Enter You Time" value={formData.time} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Seats">Seats</label>
                        <input className='input' type="number" id="seats" placeholder="Number Of People" value={formData.seats} onChange={handleChange} />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="Request">Request</label>
                        <input className='input' type="textarea" id="special_request" placeholder="Enter You Request" value={formData.special_request} onChange={handleChange} />
                    </div>
                    <button type="submit" className='register-btn'>Book Now</button>
                </form>
            </div>
        </>
    );
};

export default ReservationForm;



