import React, { useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddTransactions from './Components/addDetails';
import Transactions from './Components/details';
import FinanceReport from '../src/Components/FinanceReport';
import About from './Components/About';
import Contact from './Components/contactUs';
import Signup from './Components/Signup';
import Login from './Components/Login';
import FinanceChart from './Components/DisplayChart';

// Create a context for authentication state
const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Define a function to handle login
  const login = () => {
    setIsAuthenticated(true);
    navigate('/trans'); // Redirect to /trans after successful login
  };

  // Create a context provider with the authentication state and login/logout functions
  const authContextValue = {
    isAuthenticated,
    login,
  };

  return (
    <div className="App">
      <AuthContext.Provider value={authContextValue}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chart" element={<FinanceChart />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/trans"
            element={<Transactions />}
          />
          <Route
            path="/fin"
            element={isAuthenticated ? <Transactions /> : <Login />}
          />
          <Route 
            path="/fin/add" 
            element={isAuthenticated ? <AddTransactions /> : <Login />} />
          <Route
            path="/fin/add/trans"
            element={isAuthenticated ? <Transactions /> : <Login />}
          />
          <Route path="/fin/report" element={<FinanceReport />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
