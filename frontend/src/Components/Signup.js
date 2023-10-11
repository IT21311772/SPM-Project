import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Signup.css';
import Image from '../Images/Admin.jpeg';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'username':
        errors.username = value.length < 3 ? 'Username is too short' : '';
        break;
      case 'email':
        // You can use a regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        errors.email = !emailPattern.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errors.password = value.length < 6 ? 'Password is too short' : '';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const isFormValid = () => {
    return !Object.values(formErrors).some((error) => error.length > 0);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
        if (isFormValid()) {
            try {
                const response = await axios.post('/api/User/signup', formData);
          
                if (response.status === 200) {
                  // Handle successful signup
                  const responseData = response.data;
                  console.log('User signed up successfully:', responseData);
                  // You can redirect the user to a login page or display a success message
                  navigate('login');
                } else {
                  // Handle error
                  const errorData = response.data;
                  console.error('Signup error:', errorData);
                  // Display an error message to the user or handle the error as needed
                }
              } catch (error) {
                console.error('Request error:', error);
                // Handle network or request errors, e.g., display a general error message to the user
            }
        }
        
  };

  return (
    <div>
    <div className="full">
        <div className="half">
        <h1 className='headTitle'>Admin Signup</h1>
      <Form onSubmit={handleSignup} className='form'>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id='username'
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />
          <div className="error">{formErrors.username}</div>

          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
          <div className="error">{formErrors.email}</div>

          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id='password'
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
          <div className="error">{formErrors.password}</div>
        </Form.Group>

        <button className='signupbtn'
            style={{borderRadius:"5px", background:"#A7D5E5", 
                    padding:"1.5%", width:"60%", marginLeft:"18%", marginTop:"5%",
                    fontSize:"17px", paddingLeft:"5px", 
                    paddingRight:"5px", border:"#A7D5E5"}}>
          Sign Up
        </button>
      </Form>
      </div>
      <div className="adminImage">
          <img src={Image} alt="building" className='adimg' />
        </div>
    </div>
    </div>
  );
}

export default SignupForm;
