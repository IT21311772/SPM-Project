import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
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
      // Display an error message to the user or handle the error as needed
    }
  } catch (error) {
    console.error('Request error:', error);
    // Handle network or request errors, e.g., display a general error message to the user
  }
};


  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
