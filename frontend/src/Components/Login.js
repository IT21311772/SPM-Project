import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Signup.css';
import Image from '../Images/Admin.jpeg';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  setError('');

  const loginData = { email, password };

  try {
    const response = await axios.post('/api/User/login', loginData);

    if (response.status === 200) {
      // Handle successful login
      const responseData = response.data;
      console.log('User logged in successfully:', responseData);
      // You can redirect the user to a dashboard or show a success message
      navigate("trans");
    } else {
      // Handle error
      const errorData = response.data;
      console.error('Login error:', errorData);
      setError('Login failed. Please check your credentials.');
      // Display an error message to the user or handle the error as needed
    }
  } catch (error) {
    console.error('Request error:', error);
    // Handle network or request errors, e.g., display a general error message to the user
    setError('An error occured during login. Please try again.');
  }
};


  return (
    <div>
      <div className="full">
        <div className="half">
      <h1 className='headTitle'>Admin Login</h1>
      <Form onSubmit={handleLogin} className='form'>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id='email'
            placeholder='Enter Email'
            style={{marginBottom:"5%"}}
          />

          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id='password'
            placeholder='Enter Password'
            style={{marginBottom:"5%"}}
          />
        </Form.Group>

        {error && <p className="error">{error}</p>}

        <button className='signupbtn'
          style={{borderRadius:"5px", background:"#A7D5E5", 
          padding:"1.5%", width:"60%", marginLeft:"18%", marginTop:"5%",
          fontSize:"17px", paddingLeft:"5px", 
          paddingRight:"5px", border:"#A7D5E5"}}>
          Login
        </button><br />
        <p style={{marginTop:"5%", marginLeft:"23%"}}>Don't have an account?<Link to='/register' style={{textDecoration:"none", color:"#dac693"}}> Sign Up</Link></p>
      </Form>
      </div>
      <div className="adminImage">
      <img src={Image} alt="building" className='adimg' />
      </div>
      </div>
    </div>
  );
}

export default Login;
